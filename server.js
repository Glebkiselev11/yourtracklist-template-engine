const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const routes = require('./routes')

const app = express();

// load env
dotenv.config({ path: './config.env' })

// dev loging 
if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}


// routes
app.post('/result', routes);




// server
const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}!`);
})