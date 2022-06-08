const { Router } = require('express')
const router = Router()
const userController = require('../controllers/userController')

router.get('/users', userController.getAll)

module.exports = router
