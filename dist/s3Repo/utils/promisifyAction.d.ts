import { AWSError } from 'aws-sdk';
export declare type Callback<Result> = (err: AWSError, data: Result) => void;
declare const _default: <Params, Result>(action: (params: Params, cb: Callback<Result>) => any, params: Params) => Promise<Result>;
export default _default;
