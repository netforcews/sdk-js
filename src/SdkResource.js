const SdkClient = require('./SdkClient');

class SdkResource extends SdkClient
{
    constructor (part)
    {
        super();

        this.$part = part;
    }

    /**
     * Listar recursos.
     */
    async list()
    {
        return await this.requestJson('get', this.$part);
    }

    /**
     * Exibir recurso.
     */
    async show(id)
    {
        return await this.requestJson('get', this.$part + '/' + id);
    }

    /**
     * Salvar novo recurso.
     */
    async store(data)
    {
        return await this.requestJson('post', this.$part, data);
    }

    /**
     * Atualizar um recurso.
     */
    async update(id, data)
    {
        return await this.requestJson('put', this.$part + '/' + id, data);
    }

    /**
     * Excluir um recurso.
     */
    async delete(id)
    {
        var part = this.$part;
        var params = {};

        if ((typeof id == 'object') && ('length' in id)) {
            params.ids = id.join(',');
        } else {
            part += '/' + id;
        }

        return await this.requestJson('delete', part, params);
    }
}

module.exports = SdkResource;