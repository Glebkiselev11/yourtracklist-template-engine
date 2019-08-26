const express = require('express');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })

const router = express.Router();



// Releases
router.post('/', urlencodedParser, async (req,res) => {
    const { album_name, artist_name, album_tracks, date_rel, type, cover } = req.body;
    res.send(req.body)
    console.log(req.body)
});

module.exports = router;