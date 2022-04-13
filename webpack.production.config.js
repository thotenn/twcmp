const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: [path.resolve(__dirname, './src/index.js'),],
    output: {
        path: path.resolve(__dirname, "./static/build"),
        filename: "main.bundle.js",
        // filename: "[name].js",
        chunkFilename: "[id]-[chunkhash].js",
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
                test: /\.(js|jsx|mjs)?$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /(node_modules|bower_components|build|__pycache__|static|dist|templates)/,
                use: {
                    loader: "babel-loader",
                    options: {presets: ["@babel/env", "@babel/preset-react"]}
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
        minimize: true,
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {NODE_ENV: JSON.stringify("production"),},
        }),
    ],
};