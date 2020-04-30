const SdkClient = require('../src/SdkClient');

class AdminParametrosClient extends SdkClient
{
    /**
     * Atribuir parametro pela chave.
     * 
     * @param {String} chave Chave do parametro.
     * @param {String} valor Valor do parametro.
     * @returns {Boolean}
     */
    async set(chave, valor)
    {
        var data = {
            valor: valor
        };
        
        await this.requestJson('put', 'admin/parametros/' + chave, data);

        return true;
    }
    
    /**
     * Retorna um parametro pela chave.
     * 
     * @param {String} chave Chave do parametro.
     * @returns {String}
     */
    async get(chave)
    {
        return await this.requestJson('get', 'admin/parametros/' + chave);
    }    

    /**
     * Excluir parametro pela chave.
     * 
     * @param {String} chave Chave do parametro.
     * @returns {Boolean}
     */
    async remove(chave)
    {
        await this.requestJson('delete', 'admin/parametros/' + chave);

        return true;
    }
}

module.exports = AdminParametrosClient;