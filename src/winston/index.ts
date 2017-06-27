import * as moment from 'moment';
import * as os from 'os';
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
    level: config.console.level,
    prettyPrint: true,
    stderrLevels: ['error'],
    timestamp: getTime,
  });
};

const createAwsTransport = (config: Config): winston.TransportInstance => {
  return new CloudWatchTransport({
    awsConfig: config.cloudWatch.awsConfig,
    createLogGroup: true,
    createLogStream: true,
    level: config.cloudWatch.level,
    logGroupName: config.cloudWatch.logGroupName,
    logStreamName: config.cloudWatch.logStreamName || os.hostname,
  });
};

export default (config: Config) => {
  winston.cli();
  return new winston.Logger({
    exitOnError: false,
    transports: [
      createConsoleTransport(config),
      ...(!config.cloudWatch.enabled ? [] : [createAwsTransport(config)]),
    ],
  });
};
