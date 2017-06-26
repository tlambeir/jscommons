/// <reference types="express" />
import { Response } from 'express';
export interface Opts {
    res: Response;
    code: number;
    errorId: string;
    message: string;
}
declare const _default: ({res, code, errorId, message}: Opts) => Response;
export default _default;
