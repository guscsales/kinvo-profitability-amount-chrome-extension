const { currencyStringToFloat, currencyFloatToString } = require('./currency');

describe('Libs | Currency', () => {
  describe('when calling currencyStringToFloat', () => {
    it('replaces the special chars and returns a float number', () => {
      const result = currencyStringToFloat('2.000,12');

      expect(result).toBe(2000.12);
    });
  });

  describe('when calling currencyFloatToString', () => {
    it('converts to currency BRL value', () => {
      const result = currencyFloatToString(2000.12);

      expect(result).toBe('R$ 2.000,12');
    });
  });
});
