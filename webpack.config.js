const path = require('path')

module.exports = {
    entry: path.resolve(__dirname, "src", "index.js"),
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "bundle.js",
    },
    devServer: {
        contentBase: path.resolve(__dirname, "public"),
        historyApiFallback: true,
        allowedHosts: ["auto"],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /.*\.(gif|png|jpe?g)$/i,
                use: [{ loader: "file-loader" }],
            },
        ],
    },
};