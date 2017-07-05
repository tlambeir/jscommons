import { S3 } from 'aws-sdk';
import promisfyAction from './promisifyAction';

export default (client: S3, params: S3.DeleteObjectsRequest) => {
  return promisfyAction<S3.DeleteObjectsRequest, S3.DeleteObjectsOutput>(
    client.deleteObjects.bind(client),
    params,
  );
};
