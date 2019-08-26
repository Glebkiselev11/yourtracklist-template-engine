const path = require('path');

module.exports = {
    outputDir: path.resolve(__dirname, '../public'),
    devServer: {
        proxy: {
            '/releases' : {
                target: 'http://localhost:5000'
            }
        }
    }
}