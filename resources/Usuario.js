const SdkResource = require('../src/SdkResource');

class Usuario extends SdkResource
{
    constructor()
    {
        super('admin/usuarios');
    }
}

module.exports = Usuario;