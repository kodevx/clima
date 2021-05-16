var path = require('path');
const fs = require('fs');
const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const dotenv = require('dotenv');

var SRC_DIR = path.resolve(__dirname,'');
var DIST_DIR = path.resolve(__dirname,'dist');
  
const env = dotenv.config().parsed;

const currentPath = path.join(__dirname);
  
// Create the fallback path (the production .env)
const basePath = currentPath + '/.env';

// We're concatenating the environment name to our filename to specify the correct env file!
const envPath = basePath + '.' + env.ENVIRONMENT;

// Check if the file exists, otherwise fall back to the production .env
const finalPath = fs.existsSync(envPath) ? envPath : basePath;

// Set the path parameter in the dotenv config
const fileEnv = dotenv.config({ path: finalPath }).parsed;

const envKeys = Object.keys(fileEnv).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
    return prev;
  }, {});

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
                    //   modules: {          // TODO: Enable CSS Modules with Tailwind
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
        port: 8000
    },
    
    plugins: [
        new webpack.DefinePlugin(envKeys),
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