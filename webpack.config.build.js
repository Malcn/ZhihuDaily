var webpack = require('webpack');
var path = require("path");
module.exports = {
    entry: {
        "main": "./app.js"
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        publicPath: "/assets/",
        filename: "[name].js"
    },
    module: {
        loaders: [
            { test: /\.vue$/, loader: 'vue' },
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            { test: /\.css$/, loader: "style-loader!css-loader?root=./docs/" },
            { test: /\.scss$/, loader: "style-loader!css-loader!sass-loader" },
            { test: /\.(png|jpg)$/, loader: "url-loader?limit=8192" }
        ]
    },
    devServer: {
        inline: true,
        hot: true,
        port: 8010
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};