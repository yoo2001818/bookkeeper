var PRODUCTION = process.env.NODE_ENV === 'production';

// Use ES6 transpiling in development mode
if (!PRODUCTION) require('babel-register');

// Execute server.js
require('./src/server');
