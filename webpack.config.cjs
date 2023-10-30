
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { Template } = require('webpack');


module.exports = {
    entry: './src/index.js',
    output:{
        path: path.resolve(__dirname, './dist/'),
        filename: 'bundle.js',
        clean: true,
    },
    mode: 'production',
    plugins:[
     new HtmlWebpackPlugin({
        filename:'./index.html',
        template:'./src/index.html',
     }),
    ]
};