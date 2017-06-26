interface Config {
  level: string;
  enableAws: boolean;
  aws: {
    logGroupName: string;
    logStreamName: string;
    awsConfig: {
      accessKeyId: string;
      secretAccessKey: string;
      region: string;
    };
  };
}

export default Config;
