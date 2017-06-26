import { RequestHandler } from 'express';
import * as helmet from 'helmet';

export default (): RequestHandler => {
  return helmet({
    frameguard: false,
  });
};
