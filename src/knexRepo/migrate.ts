import Config from './Config';

export default (config: Config) =>
  async (): Promise<void> => {
    await Promise.resolve(config.db.migrate.latest());
  };
