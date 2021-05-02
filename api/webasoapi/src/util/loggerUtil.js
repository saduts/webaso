import path from 'path'
import winston from 'winston'

let filename = path.join('./src/log/', 'webaso-logfile.log');

const { combine, timestamp, label, printf } = winston.format;

const webasoFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`
})

let config = {
  levels: {
    error: 0,
    debug: 1,
    warn: 2,
    data: 3,
    info: 4,
    verbose: 5,
    silly: 6
  },
  colors: {
    error: 'red',
    debug: 'blue',
    warn: 'yellow',
    data: 'grey',
    info: 'green',
    verbose: 'cyan',
    silly: 'magenta'
  }
};

const logger = winston.createLogger({
  level: 'silly',
  transports: [
    new (winston.transports.Console)({ colorize: 'all' }),
    new (winston.transports.File)({ filename: filename }),
  ],
  format: combine(
    label({ label: 'webaso-api' }),
    timestamp(),
    webasoFormat
  )
});

export default logger