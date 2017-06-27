import BaseError from './BaseError';
export default class  extends BaseError {
    op: string;
    constructor(op: string);
}
