const path = require('path');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundleGo.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    query: {
                        presets: ['es2015']
                    }
                },
            }
        ]
    },
    devServer: {
        contentBase: [path.join(__dirname, 'dist'), path.join(__dirname, 'static')],
        compress: true,
        port: 9000
    }
};
