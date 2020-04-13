const appRoot = require('app-root-path');
const winston = require('winston');

// define the custom settings for each transport (file, console)
const options = {
  file: {
    filename: `${appRoot}/logs/app.log`,
    handleExceptions: true,
    format: winston.format.simple()

  },
  console: {
    level: 'debug',
    handleExceptions: true,
    format: winston.format.simple(),
    colorize: true
  }
};

// instantiate a new Winston Logger with the settings defined above
const logger = winston.createLogger({
  transports: [
    new winston.transports.File(options.file),
    new winston.transports.Console(options.console)
  ],
  exitOnError: false // do not exit on handled exceptions
});

// create a stream object with a 'write' function that will be used by `morgan`
logger.stream = {
  // eslint-disable-next-line no-unused-vars
  write(message, encoding) {
    // eslint-disable-next-line max-len
    // use the 'info' log level so the output will be picked up by both transports (file and console)
    logger.info(message);
  }
};

module.exports = logger;
