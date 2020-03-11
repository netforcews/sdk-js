const SdkClient = require('../src/SdkClient');
const Inquilino = require('../resources/Inquilino');

class AdminClient extends SdkClient
{
    /**
     * Construtor.
     * 
     * @param {SdkCore} core Sdk
     */
    constructor (core)     
    {
        super(core);

        this.inquilino = new Inquilino(core);
    }
}

module.exports = AdminClient;