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
            return res.status(400).send({responde: "Password must be 8 characters"});
        } else {
            try {
                User.query().select().where('username', username).then(user =>{
                    return res.send({response: user});
                });   
                
            } catch {
                return res.status(500).send({response: "Db error"});
            }
        }
    } 
    else {
        return res.status(500).send({response: "Something went wrong"});
    }
});

router.get('/logout', (req,res) => {
    return res.status(501).send({response: 'Not implemented'});
});



module.exports = router;
