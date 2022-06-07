const { response } = require("express")
const Noticia = require("../models/Noticia")



const obtenerNoticias = async (req, res = response) => {
    // const noticias= await Noticia.find({ state: true })
    //     .skip(Number(desde))
    //     .limit(Number(limite))

    // const total = await Noticia.countDocuments({ state: true })

    const { limite = 6, desde = 0 } = req.query
    const query = { estado: true }

    const [total, noticias] = await Promise.all([
        Noticia.countDocuments(query),
        Noticia.find(query)
            .skip(Number(desde))
            .limit(Number(limite))
            .populate('usuario', 'name')
            .populate('categoria', 'nombre')
    ])
    res.jsonp({
        ok: true,
        msg: 'Obtener Noticias',
        total,
        noticias
    })

}

const obtenerNoticia = async (req, res = response) => {
    const urlNoticia = req.params.url

    const noticia = await Noticia.find({ urlNoticia })
        .populate('usuario', 'name')
        .populate('categoria', 'nombre')

    res.jsonp({
        ok: true,
        msg: 'Obtener Noticia!',
        noticia

    })

}

const crearNoticia = async (req, res = response) => {
    const data = req.body
    data.usuario = req.uid
    console.log(data)
    const { urlNoticia } = req.body
    const url = await Noticia.findOne({ urlNoticia })
    if (url) {
        console.log('El Url ya existe')
        return res.status(400).json({
            ok: false,
            msg: `El URL ${url} ya existe`
        })
    }

    const noticiaModal = new Noticia(data)
    try {

        const noticia = await noticiaModal.save()

        res.status(201).jsonp({
            ok: true,
            noticia
        })
    } catch (error) {
        console.log(error)
        res.status(500).jsonp({
            ok: false,
            msg: 'Hable con el administrador',
        })
    }
}

const actualizarNoticia = async (req, res = response) => {

    const noticia = req.body
    const id = req.params.id


    try {

        const nuevaNoticia = await Noticia.findByIdAndUpdate(id, noticia, { new: true })

        res.jsonp({
            ok: true,
            msg: 'Actualizar Noticia',
            nuevaNoticia
        })

    } catch (error) {
        console.log(error)
        res.status(500).jsonp({
            ok: false,
            msg: 'Hable con el administrador',

        })
    }

}

const borrarNoticia = async (req, res = response) => {
    const id = req.params.id


    try {
        await Noticia.findByIdAndDelete(id)

        res.jsonp({
            ok: true,
            msg: 'Noticia borrada'
        })

    } catch (error) {
        console.log(error)
        res.status(507).jsonp({
            ok: true,
            msg: 'Hable con el administrador',
            id
        })

    }

}

module.exports = {
    obtenerNoticias,
    obtenerNoticia,
    crearNoticia,
    actualizarNoticia,
    borrarNoticia,
}