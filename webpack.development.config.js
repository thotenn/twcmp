const path = require('path');
const webpack = require("webpack");
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, "./static/build"),
        filename: "[name].bundle.js",
        clean: true,
    },
    resolve: {
        modules: [path.join(__dirname, 'src'), 'node_modules'],
        alias: {
            react: path.join(__dirname, 'node_modules', 'react'),
        },
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader',
                    {
                        loader: 'css-loader',
                        options: { importLoaders: 1 }
                    },
                    'postcss-loader'
                ],
            },
        ],
    },
    optimization: {
        minimize: false
    },
    plugins: [
        new HtmlWebPackPlugin({template: './public/dev.html',}),
        new webpack.DefinePlugin({
            "process.env": { NODE_ENV: JSON.stringify("development"), },
        }),
    ],
};