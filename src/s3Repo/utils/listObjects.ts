import { S3 } from 'aws-sdk';

export default (client: S3, params: S3.ListObjectsRequest): Promise<S3.ListObjectsOutput> => {
  return new Promise((resolve, reject) => {
    client.listObjects(params, (err, data) => {
      return err ? reject(err) : resolve(data);
    });
  });
};
