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
    constructor ()     
    {
        super();

        this.inquilinos = new Inquilino();
        this.usuarios = new Usuario();
    }

    /**
     * Retorna informacoes de versao.
     * 
     * @returns {Object}
     */
    async version()
    {
        return await this.requestJson('get', 'version');
    }
}

module.exports = AdminClient;