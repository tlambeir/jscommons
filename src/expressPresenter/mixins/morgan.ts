import { RequestHandler } from 'express';
import * as FileStreamRotator from 'file-stream-rotator';
import * as morgan from 'morgan';

export default (morganDirectory: string): RequestHandler => {
  const accessLogStream = FileStreamRotator.getStream({
    date_format: 'YYYYMMDD',
    filename: `${morganDirectory}/access-%DATE%.log`,
    frequency: 'daily',
    verbose: false,
  }) as NodeJS.WritableStream;
  morgan.token('query', (req) => {
    return JSON.stringify(req.query);
  });
  return morgan(':method :url :remote-addr :referrer :date :query :status', {
    stream: accessLogStream,
  });
};
