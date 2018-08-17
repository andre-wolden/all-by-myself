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
				test: /\.(js|jsx)$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env', 'react']
					}
				}
			}
		]
	},
    devServer: {
        contentBase: [path.join(__dirname, 'dist'), path.join(__dirname, 'static')],
        compress: true,
        port: 9000
    }
};
