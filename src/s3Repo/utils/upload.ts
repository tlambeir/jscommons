import { S3 } from 'aws-sdk';

export default (client: S3, params: S3.PutObjectRequest): Promise<S3.PutObjectOutput> => {
  return new Promise((resolve, reject) => {
    client.upload(params, (err, data) => {
      return err ? reject(err) : resolve(data);
    });
  });
};
