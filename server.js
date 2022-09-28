// Header
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const passport = require('passport')
const session = require('express-session')
const flash = require('express-flash')
const logger = require('morgan')
const connectDB = require('./config/database')
const mainRoutes = require('./routes/main')
const todoRoutes = require('./routes/todos')
const userProfileRoutes = require('./routes/userProfile')
const logoutRoutes = require('./routes/logout')
const fireworksRoutes = require('./routes/fireworks')
const aboutRoutes = require('./routes/about')
const contactRoutes = require('./routes/contact')
const cartRoutes = require('./routes/cart')
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient

// Load Config
dotenv.config({path: './config/.env'})

// Passport Config
require('./config/passport')(passport)

// MongoDB
connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(logger('dev'))

// Passport Express Session
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
}))

// Passport Middleware
app.use(passport.initialize())
app.use(passport.session())

app.use(flash())

// Routes
app.use('/', mainRoutes)
app.use('/userProfile', userProfileRoutes)
app.use('/todos', todoRoutes)
app.use('/fireworks', fireworksRoutes)
app.use('/about', aboutRoutes)
app.use('/contact', contactRoutes)
app.use('/cart', cartRoutes)

// Port
app.listen(process.env.PORT || PORT, (req,res) => {
    console.log(`Listening on ${process.env.PORT}`)
})
