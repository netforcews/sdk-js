const axios = require('axios');
const nws = require('./SdkCore');

class SdkClient
{
    /**
     * Construtor.
     */
    constructor ()
    {
        this.$core = nws;
    }

    /**
     * Fazer requisição ajax.
     * 
     * @param {String} method Metodo da requisicao
     * @param {String} part Part da url
     * @param {Object} params Parametros da requisicao
     * @param {Object} headers Informacoes para o header
     * @param {Object} queryInPost Query quando POST ou PUT
     * @returns {any}
     */
    async request(method, part, params = {}, headers = {}, queryInPost = {})
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
            req.params = queryInPost;
        } else {
            req.params = params;
        }

        var res = await axios(req);

        // Tratar error
        if (res.data.error) {
            throw res.data.error.message;
        }

        return res.data;
    }

    /**
     * Fazer requisição ajax passando JSON.
     * 
     * @param {String} method Metodo da requisicao
     * @param {String} part Part da url
     * @param {Object} params Parametros da requisicao
     * @param {Object} queryInPost Query quando POST ou PUT
     * @returns {any}
     */
    async requestJson(method, part, params = {}, queryInPost = {})
    {
        var headers = {
            'Content-Type': 'application/json'
        };

        return await this.request(method, part, params, headers, queryInPost);
    }
}

module.exports = SdkClient;