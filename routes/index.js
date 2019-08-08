const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })


router.post('/send', urlencodedParser, (req,res) => {
    res.send(`Hello ${req.body.name} ${req.body.secondname}`)
})

module.exports = router;