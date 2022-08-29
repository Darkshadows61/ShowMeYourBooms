// Header
const express = require('express')
const app = express()
const PORT = 8000
const cors = require('cors')
const { ObjectId } = require('mongodb')
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()

// Port
app.listen(process.env.PORT || PORT, (req,res) => {
    console.log(`Listening on ${PORT}`)
})

// Middleware
app.use(cors())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.set('view engine', 'ejs')

// Mongo
let db,
    dbConnectionStr = process.env.DB_STRING,
    dbName = 'fireworks'

    //MongoDB and CRUD
MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true })
.then(client => {
    console.log('Connection to MongoDB Complete. Ready to Boom')
    const db = client.db(dbName)//Database Name
    const master = db.collection('masterCollection')
            
    // Home
    app.get('/', (req,res)=>{
        res.render('index.ejs')
    })
    // Login
    app.get('/login', (req,res)=>{
        res.render('login.ejs')
    })
    // Profile
    app.get('/user', (req,res)=>{
        res.render('user.ejs')
    })
    // Fireworks Collection
    app.get('/fireworks', (req,res)=>{
        res.render('fireworks.ejs')
    })
    // About
    app.get('/about', (req,res)=>{
        res.render('about.ejs')
    })
    // Contact
    app.get('/contact', (req,res)=>{
        res.render('contact.ejs')
    })
})