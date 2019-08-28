const express = require('express');
const router = express.Router();

const multer  = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage });

// Releases
router.post('/', upload.single('cover'), async (req,res) => {
    console.log(req.file)
    const { album_name, artist_name, album_tracks, date_rel, type} = req.body;
    console.log(album_name)
    console.log(artist_name)
    console.log(album_tracks)
    console.log(date_rel)
    console.log(type)
    res.send(req.body)
});

module.exports = router;