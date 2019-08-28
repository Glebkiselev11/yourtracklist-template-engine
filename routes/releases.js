const express = require('express');
const router = express.Router();

const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

// Releases
router.post('/', upload.single('cover'), async (req,res) => {
    const { album_name, artist_name, album_tracks, date_rel, type, cover } = req.body;
    console.log(album_name)
    console.log(artist_name)
    console.log(album_tracks)
    console.log(date_rel)
    console.log(type)
    console.log(cover)
    res.send(req.body)
});

module.exports = router;