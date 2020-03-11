const SdkClient = require('./SdkClient');

class SdkResource extends SdkClient
{
    constructor (core, part)
    {
        super(core);

        this.$part = part;
    }

    async list()
    {
        return await this.requestJson('get', this.$part);
    }

    async show(id)
    {
        return await this.requestJson('get', this.$part + '/' + id);
    }

    async store(data)
    {
        //..
    }

    async update(id, data)
    {
        //..
    }

    async delete(id)
    {
        //..
    }
}

module.exports = SdkResource;