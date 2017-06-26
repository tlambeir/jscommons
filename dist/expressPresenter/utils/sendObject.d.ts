/// <reference types="express" />
import { Response } from 'express';
export interface Opts {
    res: Response;
    code: number;
    errorId: string;
    obj: object;
}
declare const _default: ({res, code, errorId, obj}: Opts) => Response;
export default _default;
