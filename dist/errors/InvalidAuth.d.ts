import BaseError from './BaseError';
export default class  extends BaseError {
    auth: string;
    constructor(auth: string);
}
