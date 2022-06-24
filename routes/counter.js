const { Router } = require('express')

const { getVisitCounter, putVisitCounter } = require('../controllers/visitCounter')

const router = Router()


router.get('/', getVisitCounter)
router.put('/', putVisitCounter)

module.exports = router