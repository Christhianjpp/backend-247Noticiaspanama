const { response, request } = require("express")
const Noticia = require("../models/Noticia")


const setVistas = async (req = request, res = response) => {
    const id = req.params.id

    try {
        let { vistas } = await Noticia.findById(id, { vistas: 1, _id: 0 })

        vistas++
        const data = {
            vistas
        }

        const noticia = await Noticia.findByIdAndUpdate(id, data, { new: true })
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