import Config from './Config';

export interface Service {
  clearService: () => Promise<void>;
  migrate: () => Promise<void>;
  rollback: () => Promise<void>;
}

export default (config: Config): Service => {
  return {
    clearService: config.repo.clearRepo,
    migrate: config.repo.migrate,
    rollback: config.repo.rollback,
  };
};
