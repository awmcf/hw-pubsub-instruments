const instrumentFamilyData = require('./data/instrument_family_data.js');
const InstrumentFamilies = require('./models/instrument_families.js');
const InstrumentFamilySelectView = require('./views/instrument_family_select_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');
  const instrumentFamiliesDataModel = new InstrumentFamilies(instrumentFamilyData);
  instrumentFamiliesDataModel.bindEvents();

  const selectedInstrumentFamilyView = new InstrumentFamilySelectView();
  selectedInstrumentFamilyView.bindEvents();
});
