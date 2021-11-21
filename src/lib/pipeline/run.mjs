import { exec } from 'child_process';
import logger from '../logger';

const {
  COMMAND_PULL,
  COMMAND_RESTART,
  COMMAND_TEST,
  COMMAND_TEST_OUTPUT,
  COMMAND_REVERT,
} = process.env;

export default (context) => {
  const runCommand = (cmd) => new Promise((resolve, reject) => {
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

  // const currentCommit = 123; // git rev-parse HEAD
  const runRestart = () => runCommand(COMMAND_RESTART || 'npm run restart');
  return runCommand(COMMAND_PULL || 'git pull')
    .then(runRestart)
    .then((payload) => new Promise((resolve, reject) => {
      if (!COMMAND_TEST) {
        resolve(payload);
        return;
      }
      // outputRegex: new RegExp(COMMAND_TEST_OUTPUT, 'ig') || /([\n\s]|^)active/ig,
      // commandRevert: COMMAND_REVERT || `git reset ${currentCommit} --hard`,
      runCommand(COMMAND_TEST).then(resolve).catch(reject);
    }))
    .catch(logger.error);
};
