const { response, request } = require("express")
const Noticia = require("../models/Noticia")


const setVistas = async (req = request, res = response) => {
    const id = req.params.id

    try {

        const noticia = await Noticia.findByIdAndUpdate(id, { $inc: { vistas: 1 } }, { new: true })
        const nuevaVista = noticia.vistas

        res.json({
            ok: true,
            nuevaVista
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false
        })

    }
}


module.exports = {
    setVistas
}