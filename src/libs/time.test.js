const { interval } = require('./time');

describe('Libs | Time', () => {
  describe('when calling interval', () => {
    it('changes the value from false to true and stop the interval', async () => {
      let value = false;

      await interval((done) => {
        value = true;
        done();
      }, 100);

      expect(value).toBeTruthy();
    });
  });
});
