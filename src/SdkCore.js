const Consts = require('./Consts');

class SdkCore
{
    /**
     * Construtor.
     */
    constructor(options = {})
    {
        var opts = {
            env: Consts.ENV_PRODUCTION
        };
        Object.assign(opts, options);

        this.clients = {};
        this.$env = opts.env;
        this.$accessToken = null;
    }

    /**
     * Retorna a versao do SDK.
     * 
     * @returns {String}
     */
    get version()
    {
        return '1.0.0';
    }

    /**
     * Retorna o env.
     * 
     * @returns {String}
     */
    get env()
    {
        return this.$env;
    }

    /**
     * Retorna a lista de endpoints base pelo env.
     * 
     * @returns {Object}
     */
    get endpoints()
    {
        return {
            production : '',
            sandbox    : '...',
            dev        : 'http://localhost:3000'
        };
    }

    /**
     * Retorna a base do endpoint.
     * 
     * @param {String} env Chave do endpoint 
     * @returns {String|null}
     */
    getEndpoint(env)
    {
        if (env in this.endpoints) {
            return this.endpoints[env];
        }

        return null;
    }

    /**
     * Retorna a url.
     * 
     * @param {String} part Parte da url
     * @returns {String}
     */
    getUrl(part)
    {
        var base = this.getEndpoint(this.$env);
        if (!base) {
            throw new Error(`Endpoint ${this.$env} nao foi definido`);
        }

        return base + "/" + part;
    }

    /**
     * Registrar novo cliente no sdk.
     * 
     * @param {String} client ID do client
     * @param {Class} classClient Nome da classe
     * @returns {SdkCore}
     */
    extend(client, classClient)
    {
        var $this = this;

        this.clients[client] = () => {
            return new classClient($this);
        };

        return this;
    }

    /**
     * Informar um access token.
     * 
     * @param {String} value Access token
     * @returns {String}
     */
    setAccessToken(value)
    {
        this.$accessToken = value;

        return this;
    }
}

module.exports = SdkCore;