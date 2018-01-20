import * as Winston from 'winston';

const logger = new Winston.Logger({
  level: 'info',
  transports: [
    new Winston.Transports.Console({
      colorize: true,
    }),
  ],
});

export default logger;
