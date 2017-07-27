import * as S3 from 'aws-sdk/clients/s3';

interface Config {
  readonly client: S3;
  readonly bucketName: string;
  readonly subFolder: string;
}

export default Config;
