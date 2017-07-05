import Translator from './Translator';
import stringPath from './utils/stringPath';

const translator: Translator = {
  forbiddenError: () => 'Forbidden',
  invalidAuthError: (err) => `Invalid auth '${err.auth}'`,
  noModelError: (err) => `No ${err.modelName} found`,
  requiredWarning: (warning) => {
    const path = stringPath(warning.path);
    return `Missing required value in '${path}'`;
  },
  restrictedKeysWarning: (warning) => {
    const path = stringPath(warning.path);
    const keys = warning.keys.join(', ');
    return `Unknown keys (${keys}) set in '${path}'`;
  },
  serverError: () => 'A server error occurred',
  typeWarning: (warning) => {
    const path = stringPath(warning.path);
    const typeName = warning.type.name;
    return `Expected '${path}' to be '${typeName}'`;
  },
  unauthorisedError: () => 'Unauthorised',
  warning: (warning) => {
    const path = stringPath(warning.path);
    return `Problem in '${path}'`;
  },
};

export default translator;
