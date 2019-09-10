const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const cors = require('cors');



const app = express();
app.use(cors());

// load env
dotenv.config({ path: './config.env' })

// dev loging 
if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

if(process.env.NODE_ENV === 'production') {
    // set static folder

    app.use(express.static(__dirname + '/public/'))

    // handle spa
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'))
}


// routes
app.use('/releases/create', require('./routes/releases'));
app.use('/mix/create', require('./routes/mix'));
app.use('/result', require('./routes/getCover'))




// server
const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}!`);
})