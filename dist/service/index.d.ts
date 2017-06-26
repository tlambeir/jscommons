import Config from './Config';
export interface Service {
    clearService: () => Promise<void>;
    migrate: () => Promise<void>;
    rollback: () => Promise<void>;
}
declare const _default: (config: Config) => Service;
export default _default;
