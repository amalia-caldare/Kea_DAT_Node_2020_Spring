const express = require('express');
const app = express();

// body parser
app.use(express.json());

// Setup Knex with Objection

const {Model} = require('objection');
const Knex = require('knex');
const knexfile = require('./knexfile.js');

const knex = Knex(knexfile.development);

// give the knex instance to objection
Model.knex(knex);

// Setup the routes with app

app.use((req, res) => {
    console.log("Time of request: ", new Date());
    return res.send();
});

const authRoute = require('./routes/auth.js');
const usersRoute = require('./routes/users.js');

app.use(authRoute);
app.use(usersRoute);


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