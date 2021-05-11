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
    module: {
       rules:[
           { test:/\.js$|jsx/, use:'babel-loader' },
           { 
             test:/\.(css)$/i ,
             use: [
                'style-loader',
                { 
                  loader: 'css-loader', 
                  options: {
                      sourceMap: true,
                    //   modules: {                   // TODO: Enable CSS Modules with Tailwind
                    //    localIdentName: '[name]-[local]-[hash:base64:3]',
                    //   }
                  }
                }
             ]  
           },
           { test:/\.(jpe?g|png|gif)$/i, use:[ { loader:'file-loader', options:{ outputPath: 'assets/' }} ] },
           { test: /\.(png|woff|woff2|eot|ttf|svg|otf)$/, loader: 'url-loader?limit=100000' }
       ]   
    },
    mode:'development',
    devServer: {
        hot: true,
        historyApiFallback: true,
        port: 10000
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true
            }
        }),
        new CleanWebpackPlugin()
    ]
}

module.exports = config;