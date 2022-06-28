
const { response } = require("express")
const Publicity = require("../models/Publicity")


const obtenerPublicity = async (req, res = response) => {



    const publicidad = await Publicity.find()

    return res.json({
        ok: true,
        publicidad
    })

}
const obtenerPublicityId = async (req, res = response) => {


    const id = req.params.id

    const publicidad = await Publicity.findById(id)

    return res.json({
        ok: true,
        publicidad
    })

}
const crearPublicity = async (req, res = response) => {

    const data = req.body
    try {
        const dataModal = await Publicity(data)
        const publicidad = await dataModal.save()
        return res.json({
            ok: true,
            msg: 'crearCategoria',
            publicidad
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador',

        })
    }

    res.json({
        ok: true,
        msg: 'crear publicoty'
    })

}
const actualizarPublicity = async (req, res = response) => {

    const id = req.params.id
    const data = req.body

    try {
        const publicidad = await Publicity.findByIdAndUpdate(id, data, { new: true })

        return res.json({
            ok: true,
            publicidad
        })

    } catch (error) {
        console.log(error)
        res.json({
            ok: false,
            msg: 'Hable con el Administrador'
        })
    }

}


module.exports = {
    obtenerPublicity,
    obtenerPublicityId,
    crearPublicity,
    actualizarPublicity,

}