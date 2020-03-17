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
        return await this.requestJson('post', 'auth/login', {
            email: email,
            senha: senha
        });
    }

    /**
     * Fazer logout do token.
     */
    async logout(clearAccessToken = true)
    {
        await this.requestJson('post', 'auth/logout');

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
        return await this.requestJson('get', 'auth/me');
    }

    /**
     * Solicitar email par atrocar senha.
     * 
     * @param {String} email E-mail do usuário
     * @returns {Object}
     */
    async forgotPassword(email)
    {
        return await this.requestJson('post', 'auth/forgotpassword', {
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
        return await this.requestJson('post', 'auth/resetpassword', {
            token: token,
            senha: novaSenha,
            confirmacao: confirmacao
        });
    }
}

module.exports = AuthClient;