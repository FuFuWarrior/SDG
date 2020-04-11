/** *******   calculation for  impact  ******** */

function impact(data) {
  try {
    if (data.periodType === 'days') {
      // computation of currentlyInfected estimate
      const currentlyInfected = data.reportedCases * 10;

      // computation for infectionsByRequestedTime
      const factor = Math.floor(data.timeToElapse / 3);
      const multiplier = 2 ** factor;
      const infectionsByRequestedTime = currentlyInfected * multiplier;

      // computation for severeCaseByRequestedTime
      const severeCaseByRequestedTime = (15 / 100) * infectionsByRequestedTime;

      // computation for hospitalBedsByRequestedTime
      const bedAvailability = (35 / 100) * data.totalHospitalBeds;
      const hospitalBedsByRequestedTime = bedAvailability - severeCaseByRequestedTime;

      // computation for casesForIcuByRequestedTime
      const casesForIcuByRequestedTime = (5 / 100) * infectionsByRequestedTime;

      // computation for casesForVentilatorsByRequestedTime
      const casesForVentilatorsByRequestedTime = (2 / 100) * infectionsByRequestedTime;

      // computation for dollarInFlight
      const dollarInFlight = (infectionsByRequestedTime * (65 / 100))
      * data.region.avgDailyIncomeInUSD * data.timeToElapse;

      return {
        currentlyInfected,
        infectionsByRequestedTime,
        severeCaseByRequestedTime,
        hospitalBedsByRequestedTime,
        casesForIcuByRequestedTime,
        casesForVentilatorsByRequestedTime,
        dollarInFlight
      };
    }
    if (data.periodType === 'weeks') {
      // normalizing to weeksToDays
      const weeksToDays = 7;
      const convertToDays = data.timeToElapse * weeksToDays;

      // computation of currentlyInfected estimate
      const currentlyInfected = data.reportedCases * 10;

      // computation for infectionsByRequestedTime
      const factor = Math.floor(convertToDays / 3);
      const multiplier = 2 ** factor;
      const infectionsByRequestedTime = currentlyInfected * multiplier;

      // computation for severeCaseByRequestedTime
      const severeCaseByRequestedTime = (15 / 100) * infectionsByRequestedTime;

      // computation for hospitalBedsByRequestedTime
      const bedAvailability = (35 / 100) * data.totalHospitalBeds;
      const hospitalBedsByRequestedTime = bedAvailability - severeCaseByRequestedTime;

      // computation for casesForIcuByRequestedTime
      const casesForIcuByRequestedTime = (5 / 100) * infectionsByRequestedTime;

      // computation for casesForVentilatorsByRequestedTime
      const casesForVentilatorsByRequestedTime = (2 / 100) * infectionsByRequestedTime;

      // computation for dollarInFlight
      const dollarInFlight = (infectionsByRequestedTime * (65 / 100))
      * data.region.avgDailyIncomeInUSD * data.timeToElapse;

      return {
        currentlyInfected,
        infectionsByRequestedTime,
        severeCaseByRequestedTime,
        hospitalBedsByRequestedTime,
        casesForIcuByRequestedTime,
        casesForVentilatorsByRequestedTime,
        dollarInFlight
      };
    }
    if (data.periodType === 'months') {
      // normalizing to monthsToDays
      const monthsToDays = 30;
      const convertToDays = data.timeToElapse * monthsToDays;

      // computation of currentlyInfected estimate
      const currentlyInfected = data.reportedCases * 10;

      // computation for infectionsByRequestedTime
      const factor = Math.floor(convertToDays / 3);
      const multiplier = 2 ** factor;
      const infectionsByRequestedTime = currentlyInfected * multiplier;

      // computation for severeCaseByRequestedTime
      const severeCaseByRequestedTime = (15 / 100) * infectionsByRequestedTime;
      const bedAvailability = (35 / 100) * data.totalHospitalBeds;
      const hospitalBedsByRequestedTime = bedAvailability - severeCaseByRequestedTime;

      // computation for casesForIcuByRequestedTime
      const casesForIcuByRequestedTime = (5 / 100) * infectionsByRequestedTime;

      // computation for casesForVentilatorsByRequestedTime
      const casesForVentilatorsByRequestedTime = (2 / 100) * infectionsByRequestedTime;

      // computation for dollarInFlight
      const dollarInFlight = (infectionsByRequestedTime * (65 / 100))
      * data.region.avgDailyIncomeInUSD * data.timeToElapse;

      return {
        currentlyInfected,
        infectionsByRequestedTime,
        severeCaseByRequestedTime,
        hospitalBedsByRequestedTime,
        casesForIcuByRequestedTime,
        casesForVentilatorsByRequestedTime,
        dollarInFlight
      };
    }

    throw Error('check the spelling of days, months or years');
  } catch (error) {
    throw Error(error);
  }
}

/** *******   calculation for  severely impacted  ******** */

function severelyImpact(data) {
  try {
    if (data.periodType === 'days') {
      // computation of currentlyInfected estimate
      const currentlyInfected = data.reportedCases * 50;
      const factor = Math.floor(data.timeToElapse / 3);
      const multiplier = 2 ** factor;
      const infectionsByRequestedTime = currentlyInfected * multiplier;

      // computation for severeCaseByRequestedTime
      const severeCaseByRequestedTime = (15 / 100) * infectionsByRequestedTime;

      // computation for hospitalBedsByRequestedTime
      const bedAvailability = (35 / 100) * data.totalHospitalBeds;
      const hospitalBedsByRequestedTime = bedAvailability - severeCaseByRequestedTime;

      // computation for casesForIcuByRequestedTime
      const casesForIcuByRequestedTime = (5 / 100) * infectionsByRequestedTime;

      // computation for casesForVentilatorsByRequestedTime
      const casesForVentilatorsByRequestedTime = (2 / 100) * infectionsByRequestedTime;

      // computation for dollarInFlight
      const dollarInFlight = (infectionsByRequestedTime * (65 / 100))
      * data.region.avgDailyIncomeInUSD * data.timeToElapse;

      return {
        currentlyInfected,
        infectionsByRequestedTime,
        severeCaseByRequestedTime,
        hospitalBedsByRequestedTime,
        casesForIcuByRequestedTime,
        casesForVentilatorsByRequestedTime,
        dollarInFlight
      };
    }
    if (data.periodType === 'weeks') {
      // normalizing to weeksToDays
      const weeksToDays = 7;
      const convertToDays = data.timeToElapse * weeksToDays;

      // computation of currentlyInfected estimate
      const currentlyInfected = data.reportedCases * 10;

      // computation for infectionsByRequestedTime
      const factor = Math.floor(convertToDays / 3);
      const multiplier = 2 ** factor;
      const infectionsByRequestedTime = currentlyInfected * multiplier;

      // computation for severeCaseByRequestedTime
      const severeCaseByRequestedTime = (15 / 100) * infectionsByRequestedTime;

      // computation for hospitalBedsByRequestedTime
      const bedAvailability = (35 / 100) * data.totalHospitalBeds;
      const hospitalBedsByRequestedTime = bedAvailability - severeCaseByRequestedTime;

      // computation for casesForIcuByRequestedTime
      const casesForIcuByRequestedTime = (5 / 100) * infectionsByRequestedTime;

      // computation for casesForVentilatorsByRequestedTime
      const casesForVentilatorsByRequestedTime = (2 / 100) * infectionsByRequestedTime;

      // computation for dollarInFlight
      const dollarInFlight = (infectionsByRequestedTime * (65 / 100))
      * data.region.avgDailyIncomeInUSD * convertToDays;

      return {
        currentlyInfected,
        infectionsByRequestedTime,
        severeCaseByRequestedTime,
        hospitalBedsByRequestedTime,
        casesForIcuByRequestedTime,
        casesForVentilatorsByRequestedTime,
        dollarInFlight
      };
    }
    if (data.periodType === 'months') {
      // normalizing monthsToDays
      const monthsToDays = 30;
      const convertToDays = data.timeToElapse * monthsToDays;

      // computation for currentlyInfected
      const currentlyInfected = data.reportedCases * 10;

      // computation for infectionsByRequestedTime
      const factor = Math.floor(convertToDays / 3);
      const multiplier = 2 ** factor;
      const infectionsByRequestedTime = currentlyInfected * multiplier;

      // computation for severeCaseByRequestedTime
      const severeCaseByRequestedTime = (15 / 100) * infectionsByRequestedTime;

      // computation for hospitalBedsByRequestedTime
      const bedAvailability = (35 / 100) * data.totalHospitalBeds;
      const hospitalBedsByRequestedTime = bedAvailability - severeCaseByRequestedTime;

      // computation for casesForIcuByRequestedTime
      const casesForIcuByRequestedTime = (5 / 100) * infectionsByRequestedTime;

      // computation for casesForVentilatorsByRequestedTime
      const casesForVentilatorsByRequestedTime = (2 / 100) * infectionsByRequestedTime;

      // computation for dollarInFlight
      const dollarInFlight = (infectionsByRequestedTime * (65 / 100))
      * data.region.avgDailyIncomeInUSD * convertToDays;

      return {
        currentlyInfected,
        infectionsByRequestedTime,
        severeCaseByRequestedTime,
        hospitalBedsByRequestedTime,
        casesForIcuByRequestedTime,
        casesForVentilatorsByRequestedTime,
        dollarInFlight
      };
    }

    throw Error('check the spelling of days, months or years');
  } catch (error) {
    throw Error(error);
  }
}


const covid19ImpactEstimator = (data) => {
  try {
    const output = {
      data,
      impact: {},
      severelyImpact: {}
    };

    const impacted = impact(data);
    const severelyImpacted = severelyImpact(data);
    output.impact = impacted;
    output.severelyImpact = severelyImpacted;
    return output;
  } catch (error) {
    throw Error(error);
  }
};
module.exports = covid19ImpactEstimator;
