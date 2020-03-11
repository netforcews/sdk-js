const SdkResource = require('../src/SdkResource');

class Usuario extends SdkResource
{
    constructor(core)
    {
        super(core, 'usuarios');
    }
}

module.exports = Usuario;