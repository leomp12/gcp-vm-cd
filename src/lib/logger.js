const path = require('path');
const { createLogger, format, transports } = require('winston');

const {
  LOG_LEVEL,
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
  level: LOG_LEVEL || 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.colorize(),
    format.printf((info) => {
      let log = `${info.timestamp} ${info.level}:`;
      if (typeof info.message === 'string') {
        log += ` ${info.message}`;
      } else {
        log += `\n${JSON.stringify(info.message, null, 2)}`;
      }
      if (info.stack) {
        log += `\n${info.stack}`;
      }
      return log;
    }),
  ),
  transports: transportOptions,
});

module.exports = logger;
