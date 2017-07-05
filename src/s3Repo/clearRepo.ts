import { S3 } from 'aws-sdk';
import Config from './Config';
import deleteObjects from './utils/deleteObjects';
import listObjects from './utils/listObjects';

export default (config: Config) => {
  return async (): Promise<void> => {
    // Gets all of the objects to be deleted.
    const listObjectsOutput = await listObjects(config.client, {
      Bucket: config.bucketName,
      Prefix: config.subFolder,
    });
    const objects = listObjectsOutput.Contents !== undefined ? listObjectsOutput.Contents : [];
    const identifierList: S3.ObjectIdentifierList = objects.reduce(
      (identifiers, { Key }) => {
        if (Key !== undefined) {
          return [...identifiers, { Key }];
        }
        return identifiers;
      },
      [] as S3.ObjectIdentifierList,
    );

    // Deletes the objects.
    if (identifierList.length !== 0) {
      await deleteObjects(config.client, {
        Bucket: config.bucketName,
        Delete: { Objects: identifierList },
      });
    }
  };
};
