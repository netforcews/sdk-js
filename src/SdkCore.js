const Consts = require('./Consts');

class SdkCore
{
    /**
     * Construtor.
     */
    constructor()
    {
        this.config = {
            env: Consts.ENV_PRODUCTION
        };

        this.$accessToken = null;
    }

    /**
     * Atribuir configuracao.
     * 
     * @param {Object} values Novo valores
     * @returns {SdkCore}
     */
    setConfig(values)
    {
        Object.assign(this.config, values);

        return this;
    }

    /**
     * Setar env como producao.
     * 
     * @returns {SdkCore}
     */
    production()
    {
        this.config.env = Consts.ENV_PRODUCTION;

        return this;
    }

    /**
     * Setar env como dev.
     * 
     * @returns {SdkCore}
     */
    dev()
    {
        this.config.env = Consts.ENV_DEVELOPER;

        return this;
    }

    /**
     * Setar env como sandbox.
     * 
     * @returns {SdkCore}
     */
    sandbox()
    {
        this.config.env = Consts.ENV_SANDBOX;

        return this;
    }

    /**
     * Retorna a versao do SDK.
     * 
     * @returns {String}
     */
    get version()
    {
        return Consts.version;
    }

    /**
     * Retorna a lista de endpoints base pelo env.
     * 
     * @returns {Object}
     */
    get endpoints()
    {
        return Consts.endpoints;
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
        var base = this.getEndpoint(this.config.env);
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
     * @param {Boolean} initialize Determina se classe deve ser iniciada
     * @returns {SdkCore}
     */
    extend(client, classClient, initialize = false)
    {
        var $this = this;

        var ext = classClient;
        if (initialize) {
            ext = new classClient();
        }

        this[client] = ext;

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

module.exports = new SdkCore();