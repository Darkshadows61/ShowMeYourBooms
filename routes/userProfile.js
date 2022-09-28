const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth') 
const userProfileController = require('../controllers/userProfile')
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', ensureAuth, userProfileController.getIndex)
router.get('/login', authController.getLogin)
router.post('/login', authController.postLogin)
router.get('/logout', authController.logout)
router.get('/signup', authController.getSignup)
router.post('/signup', authController.postSignup)

module.exports = router