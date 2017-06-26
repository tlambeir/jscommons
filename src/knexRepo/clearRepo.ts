import Config from './Config';

export default (config: Config) => {
  return async (): Promise<void> => {
    const start = config.db.schema.raw('SET FOREIGN_KEY_CHECKS=0;');
    const clearing = config.tableNames.reduce((result, tableName) => {
      return result.raw(`TRUNCATE ${tableName}`);
    }, start);
    const end = clearing.raw('SET FOREIGN_KEY_CHECKS=1;');
    await Promise.resolve(end);
  };
};
