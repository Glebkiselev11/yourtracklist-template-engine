const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })


// Releases
router.post('/', urlencodedParser, (req,res) => {
    const { title } = req.body
    console.log(title)
    res.status(201).send('Получил');

})

module.exports = router;