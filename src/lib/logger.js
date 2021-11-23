const path = require('path');
const { createLogger, format, transports } = require('winston');

const {
  SERVICE_NAME,
  LOG_FILEPATH,
  LOG_ERROR_FILEPATH,
} = process.env;

const transportOptions = [];
if (LOG_FILEPATH) {
  transportOptions.push(new transports.File({
    lename: path.resolve(process.cwd(), LOG_FILEPATH),
  }));
  if (LOG_ERROR_FILEPATH) {
    transportOptions.unshift(new transports.File({
      lename: path.resolve(process.cwd(), LOG_ERROR_FILEPATH),
      level: 'error',
    }));
  }
} else {
  transportOptions.push(new transports.Console());
}

const logger = createLogger({
  defaultMeta: { service: SERVICE_NAME || 'node-vms-cd' },
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    format.colorize(),
    format.simple(),
  ),
  transports: transportOptions,
});

module.exports = logger;
