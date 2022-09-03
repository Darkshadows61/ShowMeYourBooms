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
app.get('/signup', (req,res)=> {
    res.render('signup.ejs')
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