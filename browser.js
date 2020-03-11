const loadNWS = require('./index');
const Consts = require('./src/Consts');

((window) => {

    window.nws = loadNWS({ env: Consts.ENV_DEVELOPER });

})(window);