const currencyStringToFloat = (value) =>
  parseFloat(value.replace('.', '').replace(',', '.'));

const currencyFloatToString = (value) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);

module.exports = {
  currencyStringToFloat,
  currencyFloatToString
};
