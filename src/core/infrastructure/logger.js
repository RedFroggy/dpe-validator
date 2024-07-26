import { createLogger, format, transports } from 'winston';

const { combine, timestamp, prettyPrint, colorize, errors } = format;

// Disable traditional console logs
const copyLog = console.log;
const copyWarn = console.warn;
const copyDebug = console.debug;

export const logger = createLogger({
  level: 'info',
  format: combine(timestamp(), errors({ stack: true }), prettyPrint(), colorize({ all: true })),
  transports: [new transports.Console()]
});

export const setLoggerOff = () => {
  logger.silent = true;
  console.log = () => {};
  console.warn = () => {};
  console.debug = () => {};
};

export const setLoggerOn = () => {
  logger.silent = false;
  console.log = copyLog;
  console.warn = copyWarn;
  console.debug = copyDebug;
};
