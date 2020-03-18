const SdkClient = require('../src/SdkClient');

class EmailsClient extends SdkClient
{
    /**
     * Enviar mensagem por e-mail.
     * 
     * @param {Object} message Informações da mensagem.
     * @param {Boolean} sync Se mensagem deve ser enviada de forma sincrona ou assincrona
     * @returns {Object}
     */
    async send(message, sync = false)
    {
        return await this.requestJson('post', 'emails/send', message, { sync: sync });
    }
}

module.exports = EmailsClient;