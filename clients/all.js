const nws = require('../src/SdkCore');

// Auth
nws.extend('auth', require('./auth'), true);

// API
nws.extend('api', require('./api'), true);

// Outros recursos
nws.extend('admin', require('./admin'));
nws.extend('emails', require('./emails'));