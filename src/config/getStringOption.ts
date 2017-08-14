import { defaultTo } from 'lodash';

export default (value: any, defaultValue: string): string => {
  return defaultTo<string>(value, defaultValue);
};
