const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

module.exports = {
    entry: {
        app: ["./assets/main.js"],
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
                loader: 'file-loader',
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
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
    ]
}
