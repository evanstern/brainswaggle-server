import express from 'express';
import { port } from './config';
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

app.listen(port, () => {
  logger.info(`Server started on port ${port}`);
});
