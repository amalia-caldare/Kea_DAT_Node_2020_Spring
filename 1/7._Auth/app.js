const express = require('express');
const app = express();

// body parser
app.use(express.json());

const session = require('express-session');

//Copy the config.template.json file and fill out your own secret
const config = require('./config/config.json');

app.use(session({
    secret: config.sessionSecret,
    resave: false,
    saveUninitialized: true
}));

const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, //15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});

app.use(limiter);

const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, //15 minutes
    max: 8 // limit each IP to 8 requests per windowMs
});

app.use('/signup',authLimiter);
app.use('/login', authLimiter);

// Setup Knex with Objection

const {Model} = require('objection');
const Knex = require('knex');
const knexfile = require('./knexfile.js');

const knex = Knex(knexfile.development);

// give the knex instance to objection
Model.knex(knex);

// Setup the routes with app

// app.use((req, res, next) => {
//     console.log("Time of request: ", new Date());
//     //return res.send();
//     next();
// });

const authRoute = require('./routes/auth.js');
const usersRoute = require('./routes/users.js');

app.use(authRoute);
app.use(usersRoute);

const PORT = 3000;

app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log('Server is running on the port', PORT);
})