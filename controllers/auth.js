const bcrypt = require('bcryptjs/dist/bcrypt')
const { response } = require('express')
const { generarJWT } = require('../helpers/jwt')

const Usuario = require('../models/Usuario')

const crearUsuario = async (req, res = response) => {

    const { name, email, password } = req.body

    try {

        let usuario = await Usuario.findOne({ email })
        if (usuario) {
            return res.status(400).json({
                ok: false,
                msg: 'Un usuario existe con ese correo electronico',

            })
        }

        usuario = new Usuario(req.body)

        // Encriptar contraseña
        const salt = bcrypt.genSaltSync()
        usuario.password = bcrypt.hashSync(password, salt)

        // Guadar en MongoDB
        await usuario.save()

        // Generar JWT
        const token = await generarJWT(usuario.id, usuario.name)


        res.status(201).json({
            ok: true,
            uid: usuario.id,
            name: usuario.name,
            token

        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Hable con el Administrador',

        })
    }
}


const loginUsuario = async (req, res = response) => {

    const { email, password } = req.body

    try {

        const usuario = await Usuario.findOne({ email })
        if (!usuario) {
            return res.status(400).json({
                ok: false,
                msg: 'Un usuario no existe',

            })
        }


        // Confirmar los password

        const validPassword = bcrypt.compareSync(password, usuario.password)

        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                msg: 'Password incorrecto'
            })
        }

        // Generar JWT
        const token = await generarJWT(usuario.id, usuario.name)

        res.status(201).json({
            ok: true,
            uid: usuario.id,
            name: usuario.name,
            token

        })


    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Hable con el Administrador',

        })
    }
}


const validarToken = async (req, res = response) => {

    const { uid, name } = req

    const token = await generarJWT(uid, name)


    res.json({
        ok: true,
        token,
        uid,
        name
    })
}

module.exports = {
    crearUsuario,
    loginUsuario,
    validarToken
}