const { Router } = require('express')
const { setVistas } = require('../controllers/vistas')

const router = Router()


router.put('/:id', setVistas)

module.exports = router