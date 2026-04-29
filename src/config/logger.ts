import winston from 'winston';
import { Config } from './index.js';

const logger = winston.createLogger({
  level: 'info',
  defaultMeta: { serviceName: 'auth-service' },
  transports: [
    new winston.transports.File({
      dirname: 'logs',
      filename: 'app.log',
      level: 'info',
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json(),
      ),
      silent: Config.NODE_ENV === 'development',
    }),

    new winston.transports.File({
      dirname: 'logs',
      filename: 'error.log',
      level: 'error',
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json(),
      ),
      silent: Config.NODE_ENV === 'development',
    }),

    new winston.transports.Console({
      level: 'info',
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.prettyPrint(),
      ),
      silent: Config.NODE_ENV === 'development',
    }),
  ],
});

export default logger;
