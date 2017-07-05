import { S3 } from 'aws-sdk';

export default (client: S3, params: S3.GetObjectRequest): NodeJS.ReadableStream => {
  const result = client.getObject(params);
  const stream = result.createReadStream();
  return stream;
};
