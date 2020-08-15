const express = require('express');
const app = express();
var cors = require('cors');
const bcrypt = require('bcrypt')
const knex = require('knex')

const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');

const db = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : '',
    password : '',
    database : 'recognizer'
  }
});

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send('Hello World!'))
app.post('/register', (req, res) => { register.handleRegister(req, res, db, bcrypt)})
app.post('/signin', (req, res) => { signin.handleSignin(req, res, db, bcrypt)})
app.get('/profile/:userId', (req, res) => { profile.handleProfileGet(req, res, db)})
app.put('/image', (req, res) => { image.handleImage(req, res, db)})
app.post('/imageurl', (req, res) => { image.handleApiCall(req, res)})


app.listen(3000, () => console.log('Example app listening on port 3000!'))

