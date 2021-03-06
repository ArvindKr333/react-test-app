var webpack = require('webpack');


var config = {
    mode: 'development',
    entry: __dirname +  "/src/js/index.js",
    output: {
        path: __dirname +  "/src",
        filename: "index.bundle.js"
    },
    module: {
        rules: [
            {
              test: /\.js$/,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['es2015','react']
                }
              }
            }
        ]
    }
};

module.exports = config;