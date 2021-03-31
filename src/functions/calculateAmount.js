'use strict';

const {
  currencyStringToFloat,
  currencyFloatToString
} = require('../libs/currency');
const { interval } = require('../libs/time');

const calculateAmount = async () => {
  let totalAmount = null;
  let depositedAmount = null;

  await interval((done) => {
    const totalAmountSelector = document.querySelector(
      'header > div:nth-child(2) > div > div:nth-child(1) > div:last-child > div:last-child'
    );
    const depositedAmountSelector = document.querySelector(
      'header > div:nth-child(2) > div > div:nth-child(2) > div:last-child > div:last-child'
    );

    const isBalanceOnScreen =
      totalAmountSelector && totalAmountSelector.innerText;
    const isCurrentValueOnScreen =
      depositedAmountSelector && depositedAmountSelector.innerText;

    if (isBalanceOnScreen && isCurrentValueOnScreen) {
      totalAmount = currencyStringToFloat(totalAmountSelector.innerText);
      depositedAmount = currencyStringToFloat(
        depositedAmountSelector.innerText
      );

      done();
    }
  }, 100);

  const profitabilitySelector = document.querySelector(
    'header > div:nth-child(2) > div > div:nth-child(3) > div:last-child > div:last-child'
  );
  const profitabilityAmount = (totalAmount - depositedAmount).toFixed(2);

  const elementStyle = `font-size: 12px; color: ${
    profitabilityAmount > 0 ? '#00b894' : '#d63031'
  };`;

  profitabilitySelector.innerHTML += ` <span style="${elementStyle}">(${currencyFloatToString(
    profitabilityAmount
  )})</span>`;
};

module.exports = {
  calculateAmount
};
