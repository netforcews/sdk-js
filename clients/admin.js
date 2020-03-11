const SdkClient = require('../src/SdkClient');
const Inquilino = require('../resources/Inquilino');
const Usuario = require('../resources/Usuario');

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

        this.inquilinos = new Inquilino(core);
        this.usuarios = new Usuario(core);
    }
}

module.exports = AdminClient;