/// <reference types="express" />
import { Response } from 'express';
export interface Opts {
    readonly res: Response;
    readonly code: number;
    readonly errorId: string;
    readonly message: string;
}
declare const _default: ({res, code, errorId, message}: Opts) => Response;
export default _default;
