const nws = require('./index');
const Consts = require('./src/Consts');

nws.setConfig({
    env: Consts.ENV_PRODUCTION
});

module.exports = nws;