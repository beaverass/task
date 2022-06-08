const { Router } = require('express')
const router = Router()
const cityController = require('../controllers/cityController')


router.get('/cities', cityController.getAll)

module.exports = router
