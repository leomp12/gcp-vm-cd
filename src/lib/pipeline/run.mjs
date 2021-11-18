import logger from '../logger';
import pull from './steps/pull';
import restart from './steps/restart';
import test from './steps/test';

export default (context) => pull(context)
  .then(restart)
  .then(test)
  .catch(logger.error);
