const SdkCore = require('./SdkCore');
const axios = require('axios');

class SdkClient
{
    /**
     * Construtor.
     * 
     * @param {SdkCore} core Objeto core do sdk
     */
    constructor (core)
    {
        this.$core = core;
    }

    /**
     * Fazer requisição ajax.
     * 
     * @param {String} method Metodo da requisicao
     * @param {String} part Part da url
     * @param {Object} params Parametros da requisicao
     * @param {Object} headers Informacoes para o header
     * @returns {any}
     */
    async request(method, part, params = {}, headers = {})
    {
        method = method.toLowerCase();

        var hdrs = {
            'Cache-Control': 'no-cache'
        };
        Object.assign(hdrs, headers);

        var req = {
            method: method,
            url: this.$core.getUrl(part),
            headers: hdrs
        };

        // Tratar accesstoken
        if (this.$core.$accessToken) {
            req.headers['Authorization'] = this.$core.$accessToken;
        }

        if ((method == 'post') || (method == 'put')) {
            req.data = params;
        } else {
            req.params = params;
        }

        var res = await axios(req);

        // Tratar error
        if (res.data.error) {
            throw res.data.error;
        }

        return res.data;
    }

    /**
     * Fazer requisição ajax passando JSON.
     * 
     * @param {String} method Metodo da requisicao
     * @param {String} part Part da url
     * @param {Object} params Parametros da requisicao
     * @returns {any}
     */
    async requestJson(method, part, params = {})
    {
        var headers = {
            'Content-Type': 'application/json'
        };

        return await this.request(method, part, params, headers);
    }
}

module.exports = SdkClient;