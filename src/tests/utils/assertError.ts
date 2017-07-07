import * as assert from 'assert';

export default (expectedConstructor: Function, promise: Promise<any>): Promise<void> => {
  return promise.then(() => {
    assert(false, 'Expected an error to be thrown');
  }, (err) => {
    const actualConstructor = err.constructor;
    assert.equal(actualConstructor, expectedConstructor);
  });
};
