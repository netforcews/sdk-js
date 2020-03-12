const nws = require('../src/SdkCore');

nws.extend('auth', require('./auth'));
nws.extend('admin', require('./admin'));