const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: ["./src/main.js"],
    },
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "bundle.js",
    },
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: 'html-loader',
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
                    presets: ['ES2015', 'react', 'stage-0'],
                    plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
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
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        new HtmlWebpackPlugin({
            title: '2017 梅竹黑客松',
            template: 'src/template.html',
            inject: 'true',
        }),
        new webpack.HotModuleReplacementPlugin(),
    ]
}
