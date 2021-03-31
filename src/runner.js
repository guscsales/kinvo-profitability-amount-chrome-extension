const { calculateAmount } = require('./functions/calculateAmount');

const KINVO_HOST = 'app.kinvo.com.br';

if (window.location.host === KINVO_HOST) {
  console.log('Kinvo Profitability Amount Loaded!');

  calculateAmount();
}
