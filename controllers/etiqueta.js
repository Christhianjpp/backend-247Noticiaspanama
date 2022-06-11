const { response } = require("express")
const Etiqueta = require("../models/Etiqueta")


const obtenerEtiquetas = async (req, res = response) => {

    try {
        const etiquetas = await Etiqueta.find()

        res.json({
            ok: true,
            etiquetas
        })

    } catch (error) {
        console.log(error)
        res.json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }
}



const crearEtiqueta = async (req, res = response) => {
    const nombre = req.body.nombre.toUpperCase()
    const estado = req.body.estado
    const etiqueaDB = await Etiqueta.findOne({ nombre })

    if (etiqueaDB) {
        return res.status(400).json({
            ok: false,
            msg: `La categoria ${nombre} ya existe`
        })
    }

    try {

        const data = {
            nombre,
            estado
        }
        const etiquetaModal = await Etiqueta(data)
        const etiqueta = await etiquetaModal.save()

        res.json({
            ok: true,
            etiqueta
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador',

        })
    }

}

module.exports = {
    obtenerEtiquetas,
    crearEtiqueta,

}