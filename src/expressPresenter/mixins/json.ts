import * as bodyParser from 'body-parser';
import { RequestHandler } from 'express';

export default (limit: string): RequestHandler => {
  return bodyParser.json({
    limit,
    type: 'application/json',
    strict: false,
  });
};
