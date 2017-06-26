import { Router } from 'express';
import Config from './Config';
import handleCustomRoute from './handleCustomRoute';
import mixinBodyParser from './mixins/bodyParser';
import mixinCors from './mixins/cors';
import mixinHelmet from './mixins/helmet';
import mixinMorgan from './mixins/morgan';

export default (config: Config): Router => {
  const router = Router();

  router.use(mixinCors());
  router.use(mixinBodyParser(config.bodyParserLimit));
  router.use(mixinHelmet());
  router.use(mixinMorgan(config.morganDirectory));

  router.get(`/${config.customRoute}`, handleCustomRoute(config));
  return router;
};
