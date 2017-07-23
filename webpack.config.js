const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        bundle: "./src/main.js",
        qa_bundle: "./src/qa/index.js",
    },
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "[name].js",
    },
    module: {
        loaders: [
            {
                test: /\.ejs$/,
                loader: 'ejs-compiled-loader',
            },{
                test: /\.(png|jpg|svg)$/,
                loaders: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        query:{
                            progressive: true,
                            gifsicle: {
                                interlaced: false,
                            },
                            optipng: {
                                optimizationLevel: 7,
                            },
                            mozjpg: {
                                quality: '65-90',
                                speed: 1,
                            },
                            pngquant: {
                                quality: '65-90',
                                speed: 1,
                            },
                        }
                    },
                ]
            },{
                test: /\.js$/,
                exclude: /(node_module)|(bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['ES2015', 'stage-0'],
                    plugins: [],
                }
            },{
                test: /\.scss$/,
                use: [
                    {loader: "style-loader"},
                    {loader: "css-loader"},
                    {loader: "sass-loader"},
                    {loader: "postcss-loader"},
                ]
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        inline: true,
        hot: true,
        compress: true,
        port: 8080,
    },
    plugins: [
        new CleanWebpackPlugin(['public']),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        new HtmlWebpackPlugin({
            title: '2017 梅竹黑客松',
            template: 'src/template.ejs',
            chunks: ['bundle'],
        }),
        new HtmlWebpackPlugin({
            title: '2017 梅竹黑客松',
            template: 'src/qa/qa_template.ejs',
            chunks: ['qa_bundle'],
            filename: 'qa.html',
        }),
        new webpack.HotModuleReplacementPlugin(),
    ]
}
