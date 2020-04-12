exports.infectionsByRequestedTime = (data, infected) => {
  let infections = null;
  const {
    timeToElapse,
    periodType
  } = data;

  const period = timeToElapse;
  let days;
  let factor;

  if (periodType === 'days') {
    factor = Math.floor(period / 3);
    infections = infected * (2 ** factor);
  } else if (periodType === 'weeks') {
    days = period * 7;
    factor = Math.floor(days / 3);
    infections = infected * (2 ** factor);
  } else if (periodType === 'months') {
    days = period * 30;
    factor = Math.floor(days / 3);
    infections = infected * (2 ** factor);
  }
  return infections;
};

exports.severeCasesByRequestedTime = (time) => Math.trunc(time * 0.15);

exports.casesForICUByRequestedTime = (time) => time * 0.05;

exports.casesForVentilatorsByRequestedTime = (time) => time * 0.02;

exports.hospitalBedsByRequestedTime = (data, cases) => {
  const bedsAvailable = data.totalHospitalBeds * 0.35;
  return Math.trunc(bedsAvailable - cases);
};

exports.dollarsInFlight = (data, infections) => {
  let totalDollars;
  let timeInDays;
  const {
    periodType,
    timeToElapse
  } = data;
  const {
    avgDailyIncomePopulation,
    avgDailyIncomeInUSD
  } = data.region;

  if (periodType === 'weeks') {
    timeInDays = timeToElapse * 7;
    totalDollars = infections * avgDailyIncomePopulation * avgDailyIncomeInUSD * timeInDays;
  } else if (periodType === 'months') {
    timeInDays = timeToElapse * 30;
    totalDollars = infections * avgDailyIncomePopulation * avgDailyIncomeInUSD * timeInDays;
  } else {
    timeInDays = timeToElapse;
    totalDollars = infections * avgDailyIncomePopulation * avgDailyIncomeInUSD * timeInDays;
  }
  return totalDollars;
};
