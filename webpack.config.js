const path = require('path')

module.exports = {
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'CreateElement.js',
        libraryTarget: 'umd',
    },
    module: {
        rules: [
            {
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    },
    mode: 'production'
}