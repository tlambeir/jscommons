interface Config {
    console: {
        level: string;
    };
    cloudWatch: {
        level: string;
        enabled: boolean;
        logGroupName: string;
        logStreamName?: string;
        awsConfig: {
            accessKeyId: string;
            secretAccessKey: string;
            region: string;
        };
    };
}
export default Config;
