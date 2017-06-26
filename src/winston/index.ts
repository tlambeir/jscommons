import * as moment from 'moment';
import * as winston from 'winston';
import * as CloudWatchTransport from 'winston-aws-cloudwatch';
import Config from './Config';

const getTime = () => {
  return moment().format('YYYY-MM-DD HH:mm:ss:SSS');
};

const createConsoleTransport = (config: Config): winston.TransportInstance => {
  return new winston.transports.Console({
    colorize: true,
    handleExceptions: true,
    humanReadableUnhandledException: true,
    level: config.level,
    prettyPrint: true,
    stderrLevels: ['error'],
    timestamp: getTime,
  });
};

const createAwsTransport = (config: Config): winston.TransportInstance => {
  return new CloudWatchTransport({
    createLogGroup: true,
    createLogStream: true,
    level: config.level,
    ...config.aws,
  });
};

export default (config: Config) => {
  winston.cli();
  return new winston.Logger({
    exitOnError: false,
    transports: [
      createConsoleTransport(config),
      ...(!config.enableAws ? [] : [createAwsTransport(config)]),
    ],
  });
};
