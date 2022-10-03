const express = require('express')
const router = express.Router()
const userShowsController = require('../controllers/userShows') 
const { ensureAuth } = require('../middleware/auth')

router.get('/userShows', ensureAuth, userShowsController.getTodos)

module.exports = router