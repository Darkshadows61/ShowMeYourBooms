const express = require('express')
const router = express.Router()
const fireworksController = require('../controllers/fireworks') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, fireworksController.getUserShow)

//router.post('/createTodo', todosController.createTodo)

//router.put('/markComplete', todosController.markComplete)

//router.put('/markIncomplete', todosController.markIncomplete)

//router.delete('/deleteTodo', todosController.deleteTodo)

module.exports = router