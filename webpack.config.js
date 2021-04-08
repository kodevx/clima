var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

var SRC_DIR = path.resolve(__dirname,'');
var DIST_DIR = path.resolve(__dirname,'dist');

var config = {

    entry: SRC_DIR + '/index.js',
    output: {
        path: DIST_DIR + '/src',
        filename: 'bundle.js',
        publicPath: '/'
    },
    devServer: {
        historyApiFallback: true,
        port: 8000
    },
    module: {
       rules:[
           { test:/\.js$|jsx/, use:'babel-loader'},
           { test:/\.(css)$/i , use:['style-loader','css-loader'/*'css-loader?modules'*/]},  // Uncomment to render CSS Modules styles
           { test:/\.(jpe?g|png|gif)$/i, use:[ { loader:'file-loader', options:{ outputPath: "assets/" }} ] },
           { test: /\.(png|woff|woff2|eot|ttf|svg|otf)$/, loader: 'url-loader?limit=100000' }
       ]   
    },
    mode:'development',
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        new CleanWebpackPlugin()
    ]
}

module.exports = config;