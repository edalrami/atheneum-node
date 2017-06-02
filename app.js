const express = require("express")
const session = require("express-session")
const dotenv = require("dotenv")
const bodyParser = require("body-parser")
const ejs = require("ejs")
const firebase = require("firebase-admin")
const FirebaseStore = require("connect-session-firebase")(session)
const web3lib = require("web3")

//Server admin account authentication file (allows server to have admin access to firebase)
const serviceAccount = require("./Atheneum-5adcbe47350f.json")


// Initialize Firebase 
const ref = firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: "https://atheneum-91b27.firebaseio.com/"

});

// dotenv.load({path: '.env'})


// Initializing Express framework
const app = express()

// Define routes
const routes = {
    main: require("./routes/main.js"),
    functions: require("./routes/functions.js")
}

// Set apps listening port
app.set('port', process.env.PORT || 3000);

// Define views location
app.set('views', './views')

// Set view engine to use ejs
app.set('view engine', 'ejs')

// Define public folder location (for client side javascript and CSS)
app.use(express.static('./public'))
//app.use(express.static('./node_modules/web3'))

// Define how sessions behave and where they are stored
app.use(session({
  store: new FirebaseStore({
    database: ref.database()
  }),
  secret: "atheneum-48374",
  resave: true,
  rolling: true,
  name: 'atheneum',
  saveUninitialized: false
}))



app.use(function(req, res, next) {
  res.successT = function(data) {
    data = data || {}
    data.success = true
    res.json(data)
  }

  res.errorT = function(error) {
    error = error.description || error

    res.json({
      success: false,
      status: 1,
      message: error
    })
  }

  res.renderT = function(template, data) {
    data = data || {}
    data.host = req.protocol + "://" + req.hostname
    data.url = data.host + req.url
    data.template = data.template || template
    data.random = Math.random().toString(36).slice(2)
    res.render(template, data)
  }

  next()
})


// GET REQUESTS (Page rendering, redirects, other non-database-modifying functions)
app.get('/', routes.main.index )
app.get('/signUp', routes.main.signUpPage)
app.get('/upload', routes.main.upload)
app.get('/download', routes.main.download)


// POST REQUESTS
// app.post('/postURLExample', routes.functions.test) <-- add verifyUserLogin here


const server = app.listen(app.get('port'), () => {
  console.log('Express server listening on port %d in %s mode: http://localhost:%s', app.get('port'), app.get('env'), app.get('port'));
})
