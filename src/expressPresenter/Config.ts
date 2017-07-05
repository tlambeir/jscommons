import { LoggerInstance } from 'winston';
import Translator from '../TranslatorFactory/Translator';

interface Config {
  readonly logger: LoggerInstance;
  readonly translator: Translator;
  readonly customRoute: string;
  readonly customRouteText: string;
  readonly morganDirectory: string;
  readonly bodyParserLimit: string;
}

export default Config;
