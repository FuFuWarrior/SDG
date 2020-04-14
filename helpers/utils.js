const fs = require('fs');

exports.iCases = (data, num) => data.reportedCases * num;

exports.numbersInfected = (data, num) => data.currentlyInfected * num;

exports.bedSpaces = (beds, data) => {
  const bedsAvailable = Math.trunc(beds.totalHospitalBeds * 0.35);
  const cases = data.severeCasesByRequestedTime;
  return bedsAvailable - cases;
};

exports.infectionsByRequestedTime = (cases, num) => cases.infectionsByRequestedTime * num;

exports.getPeriod = (periodType, timeToElapse) => {
  let time = periodType;
  time = periodType.toLowerCase();
  switch (time) {
    case 'days':
      return timeToElapse;
    case 'weeks':
      return timeToElapse * 7;
    case 'months':
      return timeToElapse * 30;
    default:
      return 'Invalid period type';
  }
};

exports.timeInMilliseconds = (startTime) => {
  const NS_PER_SEC = 1e9; // time in nano seconds
  const NS_TO_MS = 1e6; // time in milli seconds
  const timeDifference = process.hrtime(startTime);
  return (timeDifference[0] * NS_PER_SEC + timeDifference[1]) / NS_TO_MS;
};

exports.saveToFile = (data, filename) => {
  fs.appendFile(filename, `${data}\n`, (err) => {
    if (err) {
      throw new Error('The data could not be saved');
    }
  });
};
