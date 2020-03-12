const SdkResource = require('../src/SdkResource');

class Usuario extends SdkResource
{
    constructor()
    {
        super('usuarios');
    }
}

module.exports = Usuario;