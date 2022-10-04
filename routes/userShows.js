const express = require('express')
const router = express.Router()
const userShowsController = require('../controllers/userShows') 
const { ensureAuth } = require('../middleware/auth')

router.get('/userShows', ensureAuth, userShowsController.getUserShows)

router.post('/createUserShow', userShowsController.createUserShow)

//router.put('/markComplete', userShowsController.markComplete)

//router.put('/markIncomplete', userShowsController.markIncomplete)

router.delete('/deleteUserShow', userShowsController.deleteUserShow)

module.exports = router