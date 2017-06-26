interface Config {
  level: string;
  cloudWatch: {
    enabled: boolean;
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
