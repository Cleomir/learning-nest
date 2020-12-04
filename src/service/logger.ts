import { transports, format, createLogger } from 'winston';
import { TransformableInfo } from 'logform';

const logFormat = format.printf(
  (info: TransformableInfo) =>
    `${info.timestamp}.${info.level.toUpperCase()}: ${info.message}`,
);

const logger = createLogger({
  exceptionHandlers: [new transports.File({ filename: 'exceptions.log' })],
  format: format.combine(format.timestamp(), logFormat),
  transports: [new transports.File({ filename: 'combined.log' })],
});

logger.exitOnError = false;

export default logger;
