import * as Winston from 'winston';

const logger = new Winston.Logger({
  level: 'info',
  transports: [
    new (Winston.transports.Console)({
      colorize: true,
    }),
  ],
});

export default logger;
