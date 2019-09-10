const path = require('path');

module.exports = {
    outputDir: path.resolve(__dirname, '../public'),
    devServer: {
        proxy: {
            '/releases/create': {
                target: 'http://localhost:5000'
            },
            '/result': {
                target: 'http://localhost:5000'
            }
        }
    }
}