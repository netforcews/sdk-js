const SdkResource = require('../../src/SdkResource');

class Usuario extends SdkResource
{
    constructor()
    {
        super('admin/usuarios');

        this.setAggregation('grupos');
        this.setAggregation('politicas');
    }
}

module.exports = Usuario;