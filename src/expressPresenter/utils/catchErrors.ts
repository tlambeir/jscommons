import { isNull, isUndefined } from 'lodash';
import { Warnings } from 'rulr';
import { v4 as uuid } from 'uuid';
import BaseError from '../../errors/BaseError';
import InvalidAuth from '../../errors/InvalidAuth';
import NoModel from '../../errors/NoModel';
import Unauthorised from '../../errors/Unauthorised';
import Config from '../Config';
import Handler from '../utils/Handler';
import sendMessage from '../utils/sendMessage';
import sendWarnings from '../utils/sendWarnings';

export default (config: Config, handler: Handler): Handler => {
  const translator = config.translator;

  return async (req, res) => {
    return handler(req, res).catch((err: {} | Error | BaseError) => {
      const errorId = uuid();
      config.logger.error(errorId, err);

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
    });
  };
};
