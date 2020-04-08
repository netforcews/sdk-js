const SdkResource = require('../../src/SdkResource');

class Grupo extends SdkResource
{
    constructor()
    {
        super('admin/grupos');

        this.setAggregation('usuarios');
        this.setAggregation('politicas');
    }
}

module.exports = Grupo;