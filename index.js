const SdkCore = require('./src/SdkCore');

var core = new SdkCore();

// carregar clients
require('./clients/all')(core);

module.exports = core;