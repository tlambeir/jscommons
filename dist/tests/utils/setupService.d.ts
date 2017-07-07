import 'mocha';
import Service from '../../serviceFactory/Service';
declare const _default: <ConcreteService extends Service>(service: ConcreteService) => () => ConcreteService;
export default _default;
