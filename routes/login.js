const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/', (req, res) => {
    res.send(200);
    console.log('Were ok');
});

router.post('/', (req, res) =>{
    let myData = new User(req.body);

    myData.save()
        .then(item => {
            res.send("Item Saved");
        })
        .catch(err => {
            res.status(400).send("Unable to save to DB")
        });
});


module.exports = router;