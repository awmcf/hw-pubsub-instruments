const PubSub = require('../helpers/pub_sub.js');

const InstrumentFamilyInformationView = function(container) {
  this.container = container;
};

InstrumentFamilyInformationView.prototype.bindEvents = function() {
  PubSub.subscribe('InstrumentFamilySelectView:instrument-selected', (evt) => {
    const instrumentFamilyObject = evt.detail;
    this.render(instrumentFamilyObject);
  });
};

InstrumentFamilyInformationView.prototype.render = function(instrumentFamily) {
  this.container.innerHTML = '';

  const heading = this.createHeading(instrumentFamily);
  const infoList = this.createInfoList(instrumentFamily);

  this.container.appendChild(heading);
  this.container.appendChild(description);
};

InstrumentFamilyInformationView.prototype.createHeading = function(instrumentFamily) {
  const heading = document.createElement('h2');
  heading.textContent = instrumentFamily.name;
  return heading;
};

InstrumentFamilyInformationView.prototype.createDescription = function(instrumentFamily) {
  const description = document.createElement('p');

  const descriptionOfInstrument = this.createDescription(`${instrumentFamily.description}`, description);
  return description;
};

module.exports = InstrumentFamilyInformationView;
