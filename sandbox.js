const nws = require('./index');
const Consts = require('./src/Consts');

nws.env = Consts.ENV_SANDBOX;

module.exports = nws;