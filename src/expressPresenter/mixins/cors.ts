import * as cors from 'cors';
import { RequestHandler } from 'express';

export default (): RequestHandler => {
  return cors({
    origin: '*',
    preflightContinue: true,
  });
};
