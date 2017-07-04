import { Response } from 'express';
import { isNull, isUndefined } from 'lodash';
import { Warnings } from 'rulr';
import BaseError from '../../errors/BaseError';
import InvalidAuth from '../../errors/InvalidAuth';
import NoModel from '../../errors/NoModel';
import Unauthorised from '../../errors/Unauthorised';
import Translator from '../../translator';
import sendMessage from '../utils/sendMessage';
import sendWarnings from '../utils/sendWarnings';

export interface Options {
  translator: Translator;
  errorId: string;
  res: Response;
  err: {} | Error | BaseError;
}

export default ({ translator, errorId, res, err }: Options): Response => {
  if (isNull(err) || isUndefined(null)) {
    const code = 500;
    const message = translator.serverError();
    return sendMessage({ res, code, errorId, message });
  }

  switch (err.constructor) {
    case InvalidAuth: {
      const code = 400;
      const message = translator.invalidAuth(err as InvalidAuth);
      return sendMessage({ res, code, errorId, message });
    }
    case Warnings: {
      const code = 400;
      const warnings = (err as Warnings).warnings;
      return sendWarnings({ res, code, errorId, warnings, translator });
    }
    case NoModel: {
      const code = 404;
      const message = translator.noModel(err as NoModel);
      return sendMessage({ res, code, errorId, message });
    }
    case Unauthorised: {
      const code = 401;
      const message = translator.unauthorised(err as Unauthorised);
      return sendMessage({ res, code, errorId, message });
    }
    case Error:
    case BaseError:
    default: {
      const code = 500;
      const message = translator.serverError();
      return sendMessage({ res, code, errorId, message });
    }
  }
};
