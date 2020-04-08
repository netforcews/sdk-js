const SdkResource = require('../src/SdkResource');

class Inquilino extends SdkResource
{
    constructor()
    {
        super('admin/inquilinos');
    }
}

module.exports = Inquilino;