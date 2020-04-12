// import {
//   infectionsByRequestedTime,
//   severeCasesByRequestedTime,
//   hospitalBedsByRequestedTime,
//   casesForICUByRequestedTime,
//   casesForVentilatorsByRequestedTime,
//   dollarsInFlight
// } from '../helpers/utils';
const { infectionsByRequestedTime } = require('../helpers/utils');
const { severeCasesByRequestedTime } = require('../helpers/utils');
const { hospitalBedsByRequestedTime } = require('../helpers/utils');
const { casesForICUByRequestedTime } = require('../helpers/utils');
const { casesForVentilatorsByRequestedTime } = require('../helpers/utils');
const { dollarsInFlight } = require('../helpers/utils');

const input = {
  region: {
    name: 'Africa',
    avgAge: 19.7,
    avgDailyIncomeInUSD: 5,
    avgDailyIncomePopulation: 0.71
  },
  periodType: 'days',
  timeToElapse: 58,
  reportedCases: 674,
  population: 66622705,
  totalHospitalBeds: 1380614
};

const covid19ImpactEstimator = (data) => {
  const impact = {};
  const severeImpact = {};
  let {
    reportedCases
  } = data;

  reportedCases = reportedCases;

  impact.currentlyInfected = reportedCases * 10;
  severeImpact.currentlyInfected = reportedCases * 50;

  const impactCurrentlyInfected = impact.currentlyInfected;
  impact.infectionsByRequestedTime = infectionsByRequestedTime(
    data,
    impactCurrentlyInfected
  );
  const sICurrentlyInfected = severeImpact.currentlyInfected;
  severeImpact.infectionsByRequestedTime = infectionsByRequestedTime(
    data,
    sICurrentlyInfected
  );

  impact.severeCasesByRequestedTime = severeCasesByRequestedTime(impact.infectionsByRequestedTime);
  let infections = severeImpact.infectionsByRequestedTime;
  severeImpact.severeCasesByRequestedTime = severeCasesByRequestedTime(infections);

  const impactSevereCases = impact.severeCasesByRequestedTime;
  const sISevereCases = severeImpact.severeCasesByRequestedTime;
  impact.hospitalBedsByRequestedTime = hospitalBedsByRequestedTime(data, impactSevereCases);
  severeImpact.hospitalBedsByRequestedTime = hospitalBedsByRequestedTime(data, sISevereCases);

  impact.casesForICUByRequestedTime = casesForICUByRequestedTime(impact.infectionsByRequestedTime);
  infections = severeImpact.infectionsByRequestedTime;
  severeImpact.casesForICUByRequestedTime = casesForICUByRequestedTime(infections);

  infections = impact.infectionsByRequestedTime;
  impact.casesForVentilatorsByRequestedTime = casesForVentilatorsByRequestedTime(infections);
  infections = severeImpact.infectionsByRequestedTime;
  severeImpact.casesForVentilatorsByRequestedTime = casesForVentilatorsByRequestedTime(infections);

  infections = impact.infectionsByRequestedTime;
  impact.dollarsInFlight = dollarsInFlight(data, infections);
  infections = severeImpact.infectionsByRequestedTime;
  severeImpact.dollarsInFlight = dollarsInFlight(data, infections);

  return {
    data,
    impact,
    severeImpact
  };
// console.log({
//          data,
//          impact,
//          severeImpact
//        })
};

// covid19ImpactEstimator(input);

// export default covid19ImpactEstimator;
module.exports = covid19ImpactEstimator;
