import Repo from '../Repo';
import clearRepo from './clearRepo';
import Config from './Config';
import migrate from './migrate';
import rollback from './rollback';

export default (config: Config): Repo => {
  return {
    clearRepo: clearRepo(config),
    migrate: migrate(config),
    rollback: rollback(config),
  };
};
