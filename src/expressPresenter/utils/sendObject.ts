import { Response } from 'express';

export interface Opts {
  res: Response;
  code: number;
  errorId: string;
  obj: object;
}

export default ({ res, code, errorId, obj }: Opts): Response => {
  return res.status(code).json({ errorId, ...obj });
};
