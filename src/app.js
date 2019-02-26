const InstrumentFamilySelectView = require('./views/instrument_family_select_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');
  const selectedInstrumentFamilyView = new InstrumentFamilySelectView();
  selectedInstrumentFamilyView.bindEvents();
});
