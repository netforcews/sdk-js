const SdkClient = require('../src/SdkClient');

class AuthClient extends SdkClient
{
    /**
     * Fazer login e gerar token de acesso.
     * 
     * @param {String} email E-mail do usuário
     * @param {String} senha Senha do usuario
     * @returns {Object}
     */
    async login(email, senha)
    {
        return await this.requestJson('post', 'admin/auth/login', {
            email: email,
            senha: senha
        });
    }

    /**
     * Fazer logout do token.
     */
    async logout(clearAccessToken = true)
    {
        await this.requestJson('post', 'admin/auth/logout');

        if (clearAccessToken) {
            this.$core.setAccessToken(null);
        }

        return true;
    }

    /**
     * Retorna informações do usuário logado.
     * 
     * @returns {Object}
     */
    async me()
    {
        return await this.requestJson('get', 'admin/auth/me');
    }

    /**
     * Solicitar email par atrocar senha.
     * 
     * @param {String} email E-mail do usuário
     * @returns {Object}
     */
    async forgotPassword(email)
    {
        return await this.requestJson('post', 'admin/auth/forgotpassword', {
            email: email
        });
    }

    /**
     * Reset a senha pelo token.
     * 
     * @param {String} token Token de autorização
     * @param {String} novaSenha Nova senha
     * @param {String} confirmacao Confirmação da nova senha
     * @returns {Object}
     */
    async resetPassword(token, novaSenha, confirmacao)
    {
        return await this.requestJson('post', 'admin/auth/resetpassword', {
            token: token,
            senha: novaSenha,
            confirmacao: confirmacao
        });
    }

    /**
     * Verificar se usuario tem permissao para um conta
     * 
     * @param {String} conta id da conta
     * @returns {Boolean}
     */
    async can(conta)
    {
        var ret = await this.requestJson('post', 'admin/auth/can', {
            conta: conta,
        });

        if (!(ret.conta == conta)) {
            return false;
        }

        return ret.permissao;
    }
}

module.exports = AuthClient;