require('dotenv').config();

const express = require('express');
const massive = require('massive');
const session = require('expres-session');


const { CONNECTION_STRING, SERVER_PORT, SESSION_SECRET } = process.env;
const ctrl = require('./controller');

const app = express();

app.use(express.json());

app.use(session({
    resave: false, 
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
}));

massive({
    connectionString: CONNECTION_STRING,
    ssl: { rejectUnauthorized: false }
}).then(db => {
    app.set('db', db)
    console.log('MY DB IS WORKING!!!')
}).catch(err => console.log(err))


app.post('/api/auth/register', ctrl.register)
app.post('api/auth/login', ctrl.login)
app.post('/api/auth/logout', ctrl.logout)

app.listen(SERVER_PORT, () => console.log(`Server working on port: ${SERVER_PORT}`))