import { S3 } from 'aws-sdk';
import promisfyAction from './promisifyAction';

export default (client: S3, params: S3.PutObjectRequest) => {
  return promisfyAction<S3.PutObjectRequest, S3.PutObjectOutput>(
    client.upload.bind(client),
    params,
  );
};
