/// <reference types="express" />
import { Response } from 'express';
import BaseError from '../../errors/BaseError';
import Translator from '../../translatorFactory/Translator';
export interface Options {
    readonly translator: Translator;
    readonly errorId: string;
    readonly res: Response;
    readonly err: {} | Error | BaseError;
}
declare const _default: ({translator, errorId, res, err}: Options) => Response;
export default _default;
