var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var SRC_DIR = path.resolve(__dirname,'./src');
var DIST_DIR = path.resolve(__dirname,'dist');

var config = {

    entry: SRC_DIR + '/index.js',
    output: {
            path: DIST_DIR + '/src',
            filename: 'bundle.js'
    },
    module: {
       rules:[
           { test:/\.js$|jsx/, use:'babel-loader'},
           { test:/^\.(css)$/ , use:['style-loader','css-loader']},
           { test:/^\.(jpe?g|png|gif)$/i, use:[ { loader:'file-loader', options:{ outputPath: "assets/" }} ] }
       ]   
    },
    mode:'development',
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ]
}

module.exports = config;