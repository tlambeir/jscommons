import { RequiredWarning, RestrictedKeysWarning, TypeWarning, Warning } from 'rulr';
import Translator from '../../TranslatorFactory/Translator';

export default (translator: Translator, warning: Warning) => {
  switch (warning.constructor) {
    case TypeWarning:
      return translator.typeWarning(warning as TypeWarning);
    case RequiredWarning:
      return translator.requiredWarning(warning as RequiredWarning);
    case RestrictedKeysWarning:
      return translator.restrictedKeysWarning(warning as RestrictedKeysWarning);
    case Warning:
    default:
      return translator.warning(warning);
  }
};
