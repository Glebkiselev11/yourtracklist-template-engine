const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })


router.post('/result', urlencodedParser, (req,res) => {
    console.log(req.body)
    res.send(`Hello ${req.body.name} ${req.body.secondname}`)
})

module.exports = router;