const router = require('express').Router();
const User = require('../models/User.js');

// endpoint HTTP VERB/METHOD
router.post('/login', (req,res) => {
    return res.status(501).send({response: 'Not implemented'});
});

router.post('/signup', (req,res) => {
    // User.query().select().then(users => {
    //     return res.status(501).send({response: users});
    // });
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
                        User.query().insert({
                            username,
                            password
                        }).then(createdUser => {
                          return res.send({response: `The user ${createdUser.username} was created`});
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
