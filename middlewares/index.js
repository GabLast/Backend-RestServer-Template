const validaCampos = require('../middlewares/validar-campos');
const validarJWT = require('../middlewares/validar-jwt');
const validaRoles = require('../middlewares/validar-roles');
//const validarClaves = require('../middlewares/validar-clave');

module.exports = {
    ...validaCampos,
    ...validarJWT,
    ...validaRoles,
    //...validarClaves
}