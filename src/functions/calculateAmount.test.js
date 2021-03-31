const { calculateAmount } = require('./calculateAmount');
const time = require('../libs/time');

jest.mock('../libs/time');

const intervalMock = jest.spyOn(time, 'interval');

describe('Functions | Calculate Amount', () => {
  beforeEach(() => {
    intervalMock.mockImplementation((fn) => fn(jest.fn()));
  });

  afterEach(() => {
    intervalMock.mockRestore();
  });

  describe('when calling', () => {
    it('calls interval passing the callback function and time as 100 ms', () => {
      calculateAmount();

      expect(intervalMock).toHaveBeenCalledWith(expect.any(Function), 100);
    });

    describe('and there are nodes for all amounts', () => {
      it('concatenates the current value with the amount', async () => {
        jest.spyOn(document, 'querySelector').mockReturnValueOnce({
          innerText: '2.000,00'
        });
        jest.spyOn(document, 'querySelector').mockReturnValueOnce({
          innerText: '1.000,00'
        });
        const profitabilitySelectorMock = jest
          .spyOn(document, 'querySelector')
          .mockReturnValueOnce({
            innerHTML: 'Previous Value from Kinvo'
          });

        await calculateAmount();

        expect(profitabilitySelectorMock.mock.results[2].value.innerHTML).toBe(
          'Previous Value from Kinvo <span style="font-size: 12px; color: #00b894;">(R$ 1.000,00)</span>'
        );
      });
    });
  });
});
