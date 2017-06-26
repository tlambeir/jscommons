/// <reference types="express" />
import { Request, Response } from 'express';
declare type Handler = (req: Request, res: Response) => Promise<void>;
export default Handler;
