const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth') 
const aboutController = require('../controllers/about')
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', aboutController.getIndex)
router.get('/login', authController.getLogin)
router.post('/login', authController.postLogin)
router.get('/logout', authController.logout)
router.get('/signup', authController.getSignup)
router.post('/signup', authController.postSignup)

module.exports = router