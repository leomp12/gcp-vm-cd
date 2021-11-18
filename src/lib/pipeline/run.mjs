import logger from '../logger';
import pull from './steps/pull';
import restart from './steps/restart';
import test from './steps/test';

const {
  COMMAND_PULL,
  COMMAND_RESTART,
  COMMAND_TEST,
  COMMAND_TEST_OUTPUT,
} = process.env;

export default (context) => pull(COMMAND_PULL || 'git pull', context)
  .then(() => restart(COMMAND_RESTART || 'npm run restart', context))
  .then(() => test(COMMAND_TEST, COMMAND_TEST_OUTPUT, context))
  .catch(logger.error);
