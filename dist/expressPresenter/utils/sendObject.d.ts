/// <reference types="express" />
import { Response } from 'express';
export interface Opts {
    readonly res: Response;
    readonly code: number;
    readonly errorId: string;
    readonly obj: object;
}
declare const _default: ({res, code, errorId, obj}: Opts) => Response;
export default _default;
