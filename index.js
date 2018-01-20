import express from 'express';
import logger from './services/logger';

logger.stream = {
  write: (message) => {
    logger.info(message);
  },
};

const app = express();

app.get('/', (req, res) => {
  res.send('Invalid Endpoint');
});

app.listen(3030, () => {
  logger.info('Server Started');
});
