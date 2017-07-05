import { Response } from 'express';
import { Warning } from 'rulr';
import Translator from '../../TranslatorFactory/Translator';
import sendObject from '../utils/sendObject';
import translateWarning from '../utils/translateWarning';

export interface Opts {
  res: Response;
  code: number;
  errorId: string;
  warnings: Warning[];
  translator: Translator;
}

export default ({ res, code, errorId, warnings, translator }: Opts): Response => {
  const strWarnings = warnings.map((warning) => {
    return translateWarning(translator, warning);
  });
  const obj = { warnings: strWarnings };
  return sendObject({ res, code, errorId, obj });
};
