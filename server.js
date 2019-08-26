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


// routes
app.use('/releases/create', require('./routes/releases'));




// server
const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}!`);
})