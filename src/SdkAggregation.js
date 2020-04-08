const SdkClient = require('./SdkClient');

class SdkAggregation extends SdkClient
{
    constructor (part, aggregation)
    {
        super();

        this.$part = part;
        this.$aggregation = aggregation;
    }

    /**
     * Listar associações de uma garegação
     */
    async list(id)
    {
        return await this.requestJson('get', this.$part + '/' + id + '/' + this.$aggregation);
    }

    /**
     * Associar um id a uma agregação.
     */
    async set(id, ids)
    {
        if (typeof ids == 'object') {
            ids = ids.join(',');
        }

        return await this.requestJson('put', this.$part + '/' + id + '/' + this.$aggregation, {}, { ids: ids });
    }

    /**
     * Associar um id a uma agregação.
     */
    async unset(id, ids)
    {
        if (typeof ids == 'object') {
            ids = ids.join(',');
        }

        return await this.requestJson('delete', this.$part + '/' + id + '/' + this.$aggregation, { ids: ids });
    }
}

module.exports = SdkAggregation;