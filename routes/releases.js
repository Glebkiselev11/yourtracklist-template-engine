const express = require('express');
const router = express.Router();

const multer  = require('multer');

const Jimp = require('jimp');





const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, 'cover.jpg');
    }
});

const upload = multer({ storage });


// Releases
router.post('/', upload.single('cover'), async (req,res) => {
    const { album_name, artist_name, album_tracks, date_rel, type} = req.body;


    Jimp.read('templateImage/template_rel.jpg', (err, template) => {
        Jimp.read('uploads/cover.jpg', (err, image) => {
            if (err) throw err;
            image.cover(192, 192) // resize
            template.composite(image, 304, 4 ).write('result/cart.jpg'); 
            
                Jimp.loadFont('fontsForCart/gotham_bold_24.fnt').then(font => {
                    // load font from .fnt file 
                    template
                    .print(font, 20, 21, album_name)
                    .write('result/cart.jpg'); 
                });

                Jimp.loadFont('fontsForCart/gotham_light_24.fnt').then(font => {
                    // load font from .fnt file 
                    template
                    .print(font, 21, 52, `by ${artist_name}`)
                    .write('result/cart.jpg'); 
                });

                Jimp.loadFont('fontsForCart/gotham_light_19.fnt').then(font => {
                    // load font from .fnt file 
                    template
                    .print(font, 21, 91, `${type} ${album_tracks} tracks`)
                    .write('result/cart.jpg'); 
                });

                Jimp.loadFont('fontsForCart/gotham_light_17.fnt').then(font => {
                    // load font from .fnt file 
                    template
                    .print(font, 21, 165, date_rel)
                    .write('result/cart.jpg'); 
                });

                
                
        });
    });
  
    res.send('succes')

});

module.exports = router;