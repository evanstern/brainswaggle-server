import express from 'express';
import cors from 'cors';
// import { Server } from 'http';
// import SocketIO from 'socket.io';
import { port } from './config';
import logger from './services/logger';

const app = express();

// const server = require('http').Server(app);
// const io = require('socket.io')(server);
// io.listen(server);

// const server = new Server(app);
// const io = SocketIO.listen(server);

logger.stream = {
  write: (message) => {
    logger.info(message);
  },
};

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));

app.get('/', (req, res) => {
  res.send('Invalid Endpoint');
});

const server = app.listen(port, () => {
  logger.info(`Server started on port ${port}`);
});
const io = require('socket.io').listen(server);

io.on('connection', (socket) => {
  logger.info('User connected');

  socket.on('disconnect', () => {
    logger.info('User disconnected');
  });

  socket.on('player:join', (msg) => {
    logger.info('Player Join', msg);
  });
});
