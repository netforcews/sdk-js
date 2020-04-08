const SdkClient = require('../src/SdkClient');

class ApiClient extends SdkClient
{
    /**
     * Executar GET na API.
     * 
     * @param {String} path Path do recurso
     * @param {Object} query
     * @returns {Object}
     */
    async get(path, query = {})
    {
        return await this.requestJson('get', path, query);
    }

    /**
     * Executar POST na API.
     * 
     * @param {String} path Path do recurso
     * @param {Object} data
     * @param {Object} query
     * @returns {Object}
     */
    async post(path, data = {}, query = {})
    {
        return await this.requestJson('post', path, data, query);
    }

    /**
     * Executar PUT na API.
     * 
     * @param {String} path Path do recurso
     * @param {Object} data
     * @param {Object} query
     * @returns {Object}
     */
    async put(path, data = {}, query = {})
    {
        return await this.requestJson('put', path, data, query);
    }

    /**
     * Executar DELETE na API.
     * 
     * @param {String} path Path do recurso
     * @param {Object} query
     * @returns {Object}
     */
    async delete(path, query = {})
    {
        return await this.requestJson('delete', path, query);
    }
}

module.exports = ApiClient;