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
