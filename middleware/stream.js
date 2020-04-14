// const fs = require('fs');
const path = require('path');

const timeInMilliseconds = require('../helpers/utils');
const saveToFile = require('../helpers/utils');
// function saveRequestDataToDatabase() {

// };

// module.exports = (req, res, next) => {
//   const { method } = req;
//   const endpoint = req.originalUrl;

//   res.on('finish', () => {
//     var ms = (res._startAt[0] - req._startAt[0]) * 1e3 +
//     (res._startAt[1] - req._startAt[1]) * 1e-6
//     const { status } = res;
//     console.log(res)
//     console.log(method, endpoint, 'is done',ms,'ms')
//     // saveRequestDataToDatabase(method, endpoint, status);
//     next();
//   });
// };


const requestLogger = (req, res, next) => {
  const {
    method,
    url
  } = req;
  const {
    statusCode
  } = res;
  const startTime = process.hrtime();
  const timeInMS = timeInMilliseconds.timeInMilliseconds(startTime).toLocaleString();
  const message = `${method}\t\t${url}\t\t${statusCode}\t\t${Math.floor(timeInMS)
    .toString()
    .padStart(2, '00')}ms`;
  const filePath = path.join(__dirname, '../logs.txt');

  saveToFile.saveToFile(message, filePath);
  // next();
};

module.exports = requestLogger;

// const stream = {
//   // eslint-disable-next-line no-unused-vars
//   write(message) {
//     fs.appendFileSync('./sorry/logs.txt', message);
//   }
// };

