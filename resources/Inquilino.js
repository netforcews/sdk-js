const SdkResource = require('../src/SdkResource');

class Inquilino extends SdkResource
{
    constructor(core)
    {
        super(core, 'inquilinos');
    }
}

module.exports = Inquilino;