const router = require('express').Router();

const User = require('../models/User.js');

const bcrypt = require('bcrypt');
const saltRounds = 12;

// bcrypt.hash("password", saltRounds).then(hash => console.log(hash));

// bcrypt.compare("password", "$2b$12$be6phplKjcm8XFbxVLBCVeaTM28QCzwgF8.OwLwMgJQWF2U4KNO/C")
//     .then(result => console.log(result));

router.post('/login', (req,res) => {

    // 1. get data from the request
    // 2. validate data
    // 3. check if user exists and get the password
    // 4. bcrypt compare
    // 5. send a response based on the comparison

    return res.status(501).send({response: 'Not implemented'});
});

router.post('/signup', (req,res) => {
    const {username, password } = req.body;
    if( username && password) {
        if(password.length < 9) { 
            return res.status(400).send({response: "Password must be 8 characters"});
        } else {
            try {
                User.query().select('username').where('username', username).then(foundUser =>{
                    if(foundUser.length > 0) {
                        return res.status(400).send({response: "User already exists"});

                    } else {
                        bcrypt.hash(password,saltRounds).then(hashedPassword => {
                            User.query().insert({
                                username,
                                password: hashedPassword
                            }).then(createdUser => {
                              return res.send({response: `The user ${createdUser.username} was created`});
                        });
                    });
                   
                }
            });               
            } catch (error) {
                return res.status(500).send({response: "Something went wrong with the DB"});
            }
        }
    } 
    else {
        return res.status(500).send({response: "Username or password missing"});
    }
});

router.get('/logout', (req,res) => {
    return res.status(501).send({response: 'Not implemented'});
});

module.exports = router;
