/// <reference types="knex" />
import { QueryBuilder } from 'knex';
export declare type QueryOp = (props: string[], expected: any, query: QueryBuilder) => QueryBuilder;
declare const match: QueryOp;
export default match;
