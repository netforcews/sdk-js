module.exports = (core) => {

    core.extend('auth', require('./auth'));
    core.extend('admin', require('./admin'));

};