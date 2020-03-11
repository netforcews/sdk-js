const SdkCore = require('./src/SdkCore');

module.exports = (options = {}) => {
    var core = new SdkCore(options);

    // carregar clients
    require('./clients/all')(core);

    return core;
}