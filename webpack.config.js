const path = require('path');
const webpack = require('webpack');

const BUILD_DIR = path.join(__dirname, '/src/dist');
const APP_DIR = path.join(__dirname, '/src/components');

module.exports = {
    entry: APP_DIR + '/index.jsx',
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