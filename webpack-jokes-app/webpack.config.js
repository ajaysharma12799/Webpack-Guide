const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        clean: true, // Clean Old Content JS File
        assetModuleFilename: '[name][ext]' // Original FileName with Extension
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname,'dist'),
        },
        port: 3000,
        open: true, // To Directly Open WebPack Dev Server
        hot: true, // Hot Reload
        compress: true, // Run GZip Compression
        historyApiFallback: true,
    },
    devtool: 'source-map', // To Enable Source Map For Debugging
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    plugins: [ new HtmlWebpackPlugin({
        title: 'WebPack App',
        filename: 'index.html',
        template: 'src/template.html'
    }) ]
};