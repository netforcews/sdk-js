const SdkResource = require('../src/SdkResource');

class Inquilino extends SdkResource
{
    constructor()
    {
        super('inquilinos');
    }
}

module.exports = Inquilino;