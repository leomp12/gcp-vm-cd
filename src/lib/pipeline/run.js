const { exec } = require('child_process');
const logger = require('../logger');

const {
  COMMAND_PULL,
  COMMAND_RESTART,
  COMMAND_TEST,
  REGEX_TEST_OUTPUT,
} = process.env;

module.exports = (eventData) => {
  const commandPull = eventData.commandPull || COMMAND_PULL || 'git pull';
  const commandRestart = eventData.commandRestart || COMMAND_RESTART || 'npm run restart';
  const commandTest = eventData.commandTest || COMMAND_TEST;

  const execCommand = (cmd) => new Promise((resolve, reject) => {
    exec(cmd, (error, stdout, stderr) => {
      if (error) {
        return reject(error);
      }
      if (stderr) {
        const err = new Error(`\`${cmd}\` command failed`);
        err.result = stderr;
        return reject(err);
      }
      logger.log(`\`${cmd}\` => \n${stdout}`);
      return resolve(stdout);
    });
  });

  const runTest = (currentCommit, payload) => new Promise((resolve, reject) => {
    if (!COMMAND_TEST) {
      resolve(payload);
      return;
    }
    let regexTestOutput = eventData.regexTestOutput || REGEX_TEST_OUTPUT;
    if (!regexTestOutput) {
      regexTestOutput = /([\n\s]|^)active/ig;
    } else if (typeof regexTestOutput === 'string') {
      regexTestOutput = new RegExp(regexTestOutput, 'ig');
    }
    const revertUpdate = (testOutput) => {
      logger.log(`Test failed after update, reverting to ${currentCommit}`, testOutput);
      return execCommand(`git reset ${currentCommit} --hard`)
        .then(() => execCommand(commandRestart))
        .catch(reject);
    };
    execCommand(commandTest)
      .then((stdout) => {
        if (!regexTestOutput.test(stdout)) {
          return revertUpdate();
        }
        return true;
      })
      .catch(({ stderr }) => revertUpdate({ stderr }));
  });

  return execCommand('git rev-parse HEAD')
    .then((currentCommit) => {
      execCommand(commandPull)
        .then(() => execCommand(commandRestart))
        .then((payload) => runTest(currentCommit, payload));
    })
    .catch(logger.error);
};
