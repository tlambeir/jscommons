import Translator from './index';
import stringPath from './utils/stringPath';

const translator: Translator = {
  invalidAuth: (err) => `Invalid auth '${err.auth}'`,
  invalidOp: (err) => `Invalid operator '${err.op}'`,
  noModel: (err) => `No ${err.modelName} found`,
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
  unauthorised: () => 'Unauthorised',
  warning: (warning) => {
    const path = stringPath(warning.path);
    return `Problem in '${path}'`;
  },
};

export default translator;
