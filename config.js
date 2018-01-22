import path from 'path';

const rootDir = path.join(__dirname, '.');
const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 3030;

export {
  rootDir,
  host,
  port,
};
