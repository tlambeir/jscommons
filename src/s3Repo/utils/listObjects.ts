import { S3 } from 'aws-sdk';
import promisfyAction from './promisifyAction';

export default (client: S3, params: S3.ListObjectsRequest) => {
  return promisfyAction<S3.ListObjectsRequest, S3.ListObjectsOutput>(
    client.listObjects.bind(client),
    params,
  );
};
