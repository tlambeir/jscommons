import { AWSError } from 'aws-sdk';

export type Callback<Result> = (err: AWSError, data: Result) => void;

export default <Params, Result>(
  action: (params: Params, cb: Callback<Result>) => any,
  params: Params,
): Promise<Result> => {
  return new Promise<Result>((resolve, reject) => {
    action(params, (err, data) => {
      if (Boolean(err)) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};
