import * as knex from 'knex';

interface Config {
  readonly db: knex;
  readonly migrationTableName: string;
  readonly tableNames: string[];
}

export default Config;
