const { Router } = require('express')
const { validarCampos } = require('../middlewares/validar-campos')
const { validarJWT } = require('../middlewares/validar-jwt')
const { obtenerPublicity, crearPublicity, actualizarPublicity, obtenerPublicityId } = require('../controllers/publicity')


const router = Router()


router.get('/', obtenerPublicity)
router.get('/:id', obtenerPublicityId)

router.post('/', [
    validarJWT,
    validarCampos
], crearPublicity)

router.put('/:id', [
    validarJWT,
    validarCampos
], actualizarPublicity)

module.exports = router