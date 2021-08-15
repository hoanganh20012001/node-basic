const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth.controller')
const authRequired = require('../middlewares/auth.middleware')

router.post('/login', authController.signin)
router.post('/current-user',authRequired, authController.currentUser)

module.exports = router