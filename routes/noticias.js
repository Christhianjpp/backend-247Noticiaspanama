const { Router } = require('express')
const { check } = require('express-validator')

const { obtenerNoticias,
    obtenerNoticia,
    crearNoticia,
    actualizarNoticia,
    borrarNoticia } = require('../controllers/noticias')
const { existeNoticiaPorId, existeCategoriaPorId, existeNoticiaPorUrl } = require('../helpers/db-validators')
const { validarCampos } = require('../middlewares/validar-campos')
const { validarJWT } = require('../middlewares/validar-jwt')


const router = Router()


//Obtener noticia
router.get('/', obtenerNoticias)

//Obtener noticia por id
// router.get('/:id', [
//     check('id', 'no es un id de Mongo válido').isMongoId(),
//     check('id').custom(existeNoticiaPorId),
//     validarCampos
// ], obtenerNoticia)

//Obtener noticia por url
router.get('/:url', [
    check('url').custom(existeNoticiaPorUrl),
    validarCampos
], obtenerNoticia)

// Crear noticia
router.post('/', [
    validarJWT,
    check('titulo', 'El Titulo es obligatorio').not().isEmpty(),
    check('urlNoticia', 'El URL es obligatorio').not().isEmpty(),
    check('categoria').custom(existeCategoriaPorId),

    validarCampos

], crearNoticia)

// Actualizar noticia
router.put('/:id', [
    validarJWT,
    check('id', 'no es un id de Mongo válido').isMongoId(),
    check('id').custom(existeNoticiaPorId),
    // check('categoria').custom(existeCategoriaPorId),
    validarCampos
], actualizarNoticia)

// Eliminar noticia
router.delete('/:id', [
    validarJWT,
    check('id', 'no es un id de Mongo válido').isMongoId(),
    check('id').custom(existeNoticiaPorId),
    validarCampos
], borrarNoticia)

module.exports = router