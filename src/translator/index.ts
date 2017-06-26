import { RequiredWarning, RestrictedKeysWarning, TypeWarning, Warning } from 'rulr';
import InvalidAuth from '../errors/InvalidAuth';
import NoModel from '../errors/NoModel';
import Unauthorised from '../errors/Unauthorised';

interface Translator {
  readonly serverError: () => string;
  readonly unauthorised: (err: Unauthorised) => string;
  readonly noModel: (err: NoModel) => string;
  readonly invalidAuth: (err: InvalidAuth) => string;
  readonly typeWarning: (err: TypeWarning) => string;
  readonly requiredWarning: (err: RequiredWarning) => string;
  readonly restrictedKeysWarning: (err: RestrictedKeysWarning) => string;
  readonly warning: (err: Warning) => string;
}

export default Translator;
