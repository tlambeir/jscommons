interface Service {
    clearService: () => Promise<void>;
    migrate: () => Promise<void>;
    rollback: () => Promise<void>;
}
export default Service;
