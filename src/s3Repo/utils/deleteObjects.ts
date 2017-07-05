import { S3 } from 'aws-sdk';

export default (client: S3, params: S3.DeleteObjectsRequest): Promise<S3.DeleteObjectsOutput> => {
  return new Promise((resolve, reject) => {
    client.deleteObjects(params, (err, data) => {
      return err ? reject(err) : resolve(data);
    });
  });
};
