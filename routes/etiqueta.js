const { Router } = require('express')
const { check } = require('express-validator')
const { obtenerEtiquetas, crearEtiqueta } = require('../controllers/etiqueta')

const { validarCampos } = require('../middlewares/validar-campos')
const { validarJWT } = require('../middlewares/validar-jwt')

const router = Router()

router.get('/', obtenerEtiquetas)

router.post('/', [
    validarJWT,
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    validarCampos
], crearEtiqueta)





module.exports = router