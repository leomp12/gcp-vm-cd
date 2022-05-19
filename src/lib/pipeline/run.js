const path = require('path');
const fs = require('fs');
const { exec } = require('child_process');
const logger = require('../logger');

const {
  COMMAND_WORKING_DIR,
  COMMAND_PULL,
  COMMAND_RESTART,
  COMMAND_TEST,
  REGEX_TEST_OUTPUT,
} = process.env;

module.exports = (eventData) => {
  const cwd = eventData.commandWorkingDir || COMMAND_WORKING_DIR;
  const gitPath = path.join(cwd, '.git');
  if (!fs.existsSync(gitPath)) {
    logger.notice(`Event skipped due to non existent dir ${gitPath}`);
    return Promise.resolve(null);
  }

  const commandPull = eventData.commandPull || COMMAND_PULL || 'git pull';
  const commandRestart = eventData.commandRestart || COMMAND_RESTART || 'npm run restart';
  const commandTest = eventData.commandTest || COMMAND_TEST;

  const execCommand = (cmd) => new Promise((resolve, reject) => {
    exec(cmd, { cwd }, (error, stdout, stderr) => {
      if (error) {
        return reject(error);
      }
      logger.info({ cmd, stdout, stderr });
      return resolve(stdout);
    });
  });

  const runTest = (currentCommit, payload) => new Promise((resolve, reject) => {
    if (!commandTest) {
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
      logger.warn(`Test failed after update, reverting to ${currentCommit}`, testOutput);
      return execCommand(`git reset ${currentCommit} --hard`)
        .then(() => execCommand(commandRestart))
        .then(resolve).catch(reject);
    };
    execCommand(commandTest)
      .then((stdout) => {
        if (!regexTestOutput.test(stdout)) {
          return revertUpdate();
        }
        return resolve(true);
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
