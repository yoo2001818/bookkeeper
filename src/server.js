import express from 'express';
import morgan from 'morgan';
import api from './api';

let debug = require('debug')('app:server');

let app = express();

app.use(morgan('dev'));
app.use('/api', api);

app.get('/', (req, res) => {
  res.send('Hello, world!');
  debug('Sent hello world');
});

app.listen(8000, () => {
  console.log('Server started on port 8000');
});
