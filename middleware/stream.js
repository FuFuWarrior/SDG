const fs = require('fs');

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

const stream = {
  // eslint-disable-next-line no-unused-vars
  write(message) {
    fs.appendFileSync('./sorry/logs.txt', nn);
  }
};

module.exports = stream;
