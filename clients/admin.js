const SdkClient = require('../src/SdkClient');
const Inquilino = require('../resources/admin/Inquilino');
const Usuario = require('../resources/admin/Usuario');
const Grupo = require('../resources/admin/Grupo');
const Politica = require('../resources/admin/Politica');

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
        this.grupos = new Grupo();
        this.politicas = new Politica();
    }

    /**
     * Retorna informacoes de versao.
     * 
     * @returns {Object}
     */
    async version()
    {
        return await this.requestJson('get', 'admin/version');
    }
}

module.exports = AdminClient;