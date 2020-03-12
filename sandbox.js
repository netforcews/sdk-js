const nws = require('./index');
const Consts = require('./src/Consts');

nws.setConfig({
    env: Consts.ENV_SANDBOX
});

module.exports = nws;