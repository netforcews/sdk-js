const SdkResource = require('../../src/SdkResource');

class Politica extends SdkResource
{
    constructor()
    {
        super('admin/politicas');

        this.setAggregation('usuarios');
        this.setAggregation('grupos');
    }
}

module.exports = Politica;