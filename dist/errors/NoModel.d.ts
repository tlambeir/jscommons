import BaseError from './BaseError';
export default class  extends BaseError {
    modelName: string;
    constructor(modelName: string);
}
