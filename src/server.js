import express from 'express';
import morgan from 'morgan';
import knex from './db';

let debug = require('debug')('app:server');

let app = express();

app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('Hello, world!');
  debug('Sent hello world');
});
