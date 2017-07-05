/// <reference types="express" />
import { Response } from 'express';
import { Warning } from 'rulr';
import Translator from '../../TranslatorFactory/Translator';
export interface Opts {
    res: Response;
    code: number;
    errorId: string;
    warnings: Warning[];
    translator: Translator;
}
declare const _default: ({res, code, errorId, warnings, translator}: Opts) => Response;
export default _default;
