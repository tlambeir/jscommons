import 'mocha'; // tslint:disable-line
import Service from '../../serviceFactory/Service';

const migrateService = async (service: Service) => {
  await service.rollback();
  await service.migrate();
};

export default (service: Service) => {
  const migrations = migrateService(service);

  return (): Service => {
    before(async () => {
      await migrations;
    });

    beforeEach(async () => {
      await service.clearService();
    });

    return service;
  };
};
