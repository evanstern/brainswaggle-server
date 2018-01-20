import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Invalid Endpoint');
});

app.listen(3030, () => {

});
