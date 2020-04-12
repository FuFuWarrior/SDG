/* eslint-disable import/prefer-default-export */

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
    infections = Math.floor(infected * (2 ** factor));
  } else if (periodType === 'weeks') {
    days = period * 7;
    factor = Math.floor(days / 3);
    infections = Math.floor(infected * (2 ** factor));
  } else if (periodType === 'months') {
    days = period * 30;
    factor = Math.floor(days / 3);
    infections = Math.floor(infected * (2 ** factor));
  }
  return infections;
};

exports.severeCasesByRequestedTime = (time) => Math.floor(time * 0.15);

exports.casesForICUByRequestedTime = (time) => Math.floor(time * 0.05);

exports.casesForVentilatorsByRequestedTime = (time) => Math.floor(time * 0.02);

exports.hospitalBedsByRequestedTime = (data, cases) => {
  const bedsAvailable = Math.floor(data.totalHospitalBeds * 0.35);
  return Math.floor(bedsAvailable - cases);
};

exports.dollarsInFlight = (data, infections) => {
  let totalDollars;
  let timeInDays;
  const {
    periodType,
    timeToElapse
  } = data;
  const {
    // avgDailyIncomePopulation,
    avgDailyIncomeInUSD
  } = data.region;

  if (periodType === 'weeks') {
    timeInDays = timeToElapse * 7;
    totalDollars = Math.floor((infections * 0.65) * avgDailyIncomeInUSD * timeInDays);
  } else if (periodType === 'months') {
    timeInDays = timeToElapse * 30;
    totalDollars = Math.floor((infections * 0.65) * avgDailyIncomeInUSD * timeInDays);
  } else {
    timeInDays = timeToElapse;
    totalDollars = Math.floor((infections * 0.65) * avgDailyIncomeInUSD * timeInDays);
  }
  return Math.floor(totalDollars);
};
