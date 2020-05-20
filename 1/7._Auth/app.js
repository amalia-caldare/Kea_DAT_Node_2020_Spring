const express = require('express');
const app = express();

// body parser
app.use(express.json());

// import auth router module
const authRoute = require('./routes/auth.js');
const usersRoute = require('./routes/users.js');

app.use(authRoute);
app.use(usersRoute);

// imports ORM
const {Model} = require('objection');
const Knex = require('knex');
const knexfile = require('./knexfile.js');

// initialize knex
const knex = Knex(knexfile.development);

// give the knex instance to objection
Model.knex(knex);

app.get('/', async (req,res) => {
    // knex('users').select().then(users => {
    //     return res.send({response: users});
    // }).catch(error => {
       // return res.status(400).send({response: error});
   // })
    return res.send({response: await knex('users').select()});
}); 

const PORT = 3000;

app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log('Server is running on the port', PORT);
})