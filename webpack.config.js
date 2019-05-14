const path = require('path');
const webpack = require('webpack');

const BUILD_DIR = path.join(__dirname, '/src/dist');
const APP_DIR = path.join(__dirname, '/src/components');

module.exports = {
<<<<<<< HEAD
    entry: BUILD_DIR + '/index.jsx',
=======
    entry: APP_DIR + '/index.jsx',
>>>>>>> ed0d7b314f47c06dfd96249c30a9b0d1172ac168
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }   
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    }
}