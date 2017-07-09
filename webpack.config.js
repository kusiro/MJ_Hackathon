const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {

    entry: {
        app:["./assets/main.js", "webpack-dev-server/client?http://localhost:8080/"]
    },

    output: {
        path: path.resolve(__dirname, "public"),
        publicPath: "/public/",
        filename: "bundle.js"
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    presets: ['ES2015'],
                }
            },{
                test: /\.html$/,
                use: [{
                    loader: 'raw-loader'
                },{
                    loader: 'html-loader',
                }]

            },{
                test: /\.scss$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                },{
                    loader: "postcss-loader"
                }]
            }

        ]

    },

    devServer: {
        historyApiFallback: true,
        inline: true,
        hot: true,
        compress: true,
        port: 8080
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin(),
    ]
}
