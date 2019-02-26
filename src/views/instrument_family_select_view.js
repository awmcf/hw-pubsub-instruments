const PubSub = require('../helpers/pub_sub.js');

const InstrumentFamilySelectView = function () {

};

InstrumentFamilySelectView.prototype.bindEvents = function () {
  const select = document.querySelector('#instrument-families');
  select.addEventListener('select', (evt) => {
  const selectedInstrumentFamily = evt.target.value
  Pubsub.publish('InstrumentFamilySelectView:instrument-selected', selectedInstrumentFamily);
  });
};

module.exports = InstrumentFamilySelectView;
