import * as S3 from 'aws-sdk/clients/s3';

interface Config {
  client: S3;
  bucketName: string;
  subFolder: string;
}

export default Config;
