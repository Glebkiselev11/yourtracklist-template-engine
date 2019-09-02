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


// Mix
router.post('/', upload.single('cover'), async (req,res) => {
    const { mix_name, mix_duration, mix_tracks, date_rel, public_name} = req.body;


    Jimp.read('templateImage/template_mix.jpg', (err, template) => {
        Jimp.read('uploads/cover.jpg', (err, image) => {
            if (err) throw err;
            image.cover(242, 242) // resize
            template.composite(image, 254, 4 ).write('result/cart.jpg'); 
            
                Jimp.loadFont('fontsForCart/gotham_bold_24.fnt').then(font => {
                    // load font from .fnt file 
                    template
                    .print(font, 15, 15, mix_name)
                    .write('result/cart.jpg'); 
                });

                Jimp.loadFont('fontsForCart/gotham_light_24.fnt').then(font => {
                    // load font from .fnt file 
                    template
                    .print(font, 15, 45, `by ${public_name}`)
                    .write('result/cart.jpg'); 
                });

                Jimp.loadFont('fontsForCart/gotham_light_19.fnt').then(font => {
                    // load font from .fnt file 
                    template
                    .print(font, 15, 105, `${mix_tracks} tracks`)
                    .write('result/cart.jpg'); 
                });

                Jimp.loadFont('fontsForCart/gotham_light_19.fnt').then(font => {
                    // load font from .fnt file 
                    template
                    .print(font, 15, 127, `${mix_duration} time`)
                    .write('result/cart.jpg'); 
                });

                Jimp.loadFont('fontsForCart/gotham_light_17.fnt').then(font => {
                    // load font from .fnt file 
                    template
                    .print(font, 15, 220, date_rel)
                    .write('result/cart.jpg'); 
                });

                
                
        });
    });
  
    res.send('succes')

});

module.exports = router;