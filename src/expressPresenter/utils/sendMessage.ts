import { Response } from 'express';
import sendObject from '../utils/sendObject';

export interface Opts {
  res: Response;
  code: number;
  errorId: string;
  message: string;
}

export default ({ res, code, errorId, message }: Opts): Response => {
  const obj = { message };
  return sendObject({ res, code, errorId, obj });
};
