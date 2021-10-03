const express = require("express")
const path = require("path")

const dbConnection = require('./config/connection')
const session = require('express-session')
// will use to store the session in the databse
const SequelizeStore = require('connect-session-sequelize')(session.Store);



const controller = require('./controllers')
const app = express();

const sessionConfig = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: dbConnection
  })
};

app.use(session(sessionConfig));


const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// static files stored in /publix folder
app.use(express.static(path.join(__dirname, "public")));

// all routes go through controllers dir
app.use('/', controller);


// connect to the mysql database then start express server
dbConnection.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log("Server listening on port:  http://localhost:" + PORT);
  });
});