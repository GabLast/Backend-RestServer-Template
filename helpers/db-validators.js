const Role = require('../models/role');
const Usuario = require('../models/usuario');

const esRoleValido = async(rol = '') => {

    const existeRol = await Role.findOne({ rol });
    if (!existeRol) {
        throw new Error(`El rol ${ rol } no está registrado en la BD`);
    }
}

const emailExiste = async(correo = '') => {

    // Verificar si el correo existe
    const existeEmail = await Usuario.findOne({ correo });
    if (existeEmail) {
        throw new Error(`El correo: ${ correo }, ya está registrado`);
    }
}

const existeUsuarioPorId = async(id) => {

    // Verificar si el correo existe
    const existeUsuario = await Usuario.findById(id);
    if (!existeUsuario) {
        throw new Error(`El id no existe ${ id }`);
    }
}

const esClaveNueva = async(id = '', password = '') => {
    const existeUser = await Usuario.findById(id);

    if (!existeUser) {
        throw new Error('El id {' + id + '} no existe')
    }

    const esNueva = bcryptjs.compareSync(password, existeUser.password)
    if (!esNueva) {
        return res.status(400).json({
            msg: 'Esta contraseña es igual a la contraseña antigua. Elija una nueva'
        })
    }
}

module.exports = {
    esRoleValido,
    emailExiste,
    existeUsuarioPorId,
    esClaveNueva
}