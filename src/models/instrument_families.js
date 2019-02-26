const PubSub = require('../helpers/pub_sub.js');

const InstrumentFamilies = function(data) {
  this.data = data;
};

InstrumentFamilies.prototype.bindEvents = function() {
  PubSub.subscribe('InstrumentFamilySelectView:instrument-selected', (evt) => {
    const selectedInstrumentFamily = evt.detail;
    const selectedInstrumentFamilyObject = this.findByName(selectedInstrumentFamily);
    PubSub.publish('InstrumentFamily:selected-instrument-family-ready', selectedInstrumentFamilyObject);
  });
};

InstrumentFamilies.prototype.findByName = function(searchName) {
  const foundInstrumentFamily = this.data.find((currentInstrumentFamily) => {
    return currentInstrumentFamily.name === searchName;
  });
  return foundInstrumentFamily;
};

module.exports = InstrumentFamilies;
