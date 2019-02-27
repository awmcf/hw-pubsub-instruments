const PubSub = require('../helpers/pub_sub.js');

const InstrumentFamilySelectView = function () {

};

InstrumentFamilySelectView.prototype.bindEvents = function () {
  const selected = document.querySelector('#instrument-families');
  selected.addEventListener('select', (evt) => {
  const selectedInstrumentFamily = evt.target.value
  Pubsub.publish('InstrumentFamilySelectView:instrument-selected', selectedInstrumentFamily);
  });
};

module.exports = InstrumentFamilySelectView;
