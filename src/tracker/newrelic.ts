import Tracker from './Tracker';

export default async (): Promise<Tracker> => {
  const newrelic = require('newrelic'); /* tslint:disable-line:no-require-imports */
  const tracker: Tracker = (name, value) => {
    newrelic.addCustomAttribute(name, value);
  };
  return tracker;
};
