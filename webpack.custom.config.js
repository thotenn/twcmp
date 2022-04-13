const path = require("path");
const webpack = require("webpack");

module.exports = {
    // Para mas info de los chunk files
    //https://medium.com/hackernoon/the-100-correct-way-to-split-your-chunks-with-webpack-f8a9df5b7758
    //https://webpack.js.org/guides/code-splitting/

    // entry: [path.resolve(__dirname, './src/index.js')],
    entry: {
        index: path.resolve(__dirname, './src/index.js'),
        PointOfSale: path.resolve(__dirname, './src/views/box/PointOfSale.js'),
        // Login: path.resolve(__dirname, './src/views/base/Login.js'),
    },
    // devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, "./static/build"),
        filename: "[name].bundle.js",
        //NEW
        clean: true,
    },
    module: {
        rules: [
            {
                // test: /\.js$/,
                test: /\.(js|jsx|mjs)?$/,  // NEW
                include: path.resolve(__dirname, 'src'),
                exclude: /(node_modules|bower_components|build)/,
                // loader: "babel-loader",
                use: {  // NEW
                    loader: "babel-loader",
                    options: {presets: ["@babel/env", "@babel/preset-react"]}
                },
            }, {
            // Si queremos compilar sass mirar https://webpack.js.org/loaders/sass-loader/
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    // devServer: {
    // "start": "webpack serve --config webpack.config.js", esto iria en el package en caso de activar hot reload
    //"webpack-dev-server": "^3.11.2"  y esto tambien pero en el devDependencies
    //     writeToDisk: true,
    // },
    optimization: {
        minimize: true,
        // splitChunks: {
            // // chunks: "all", // NEW
            // cacheGroups: {}
        // }
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                // This has effect on the react lib size
                NODE_ENV: JSON.stringify("production"),
                // NODE_ENV: JSON.stringify("development"),
            },
        }),
    ],
};