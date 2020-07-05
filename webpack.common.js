const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/app.js",    
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",         
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader?url=false"
                    },
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: 'file-loader?name=[name].[ext]&outputPath=src/styles/img'
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html"
        }),
    ],
};