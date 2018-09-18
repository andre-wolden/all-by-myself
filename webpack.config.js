const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundleGo.js'
    },

    plugins: [
        new CopyWebpackPlugin([
            { from: 'static/style', to: '' },
        ]),
    ],

	module: {
		rules: [
            {
                test: /\.css$/,
                exclude: /(node_modules)/,
                loader: ExtractTextPlugin.extract({
                    // use style-loader in development
                    fallback: 'style-loader?sourceMap=false',
                    use: [
                        {
                            loader: 'css-loader', options: { sourceMap: false, }
                        }
                    ],
                }),
            },
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env', 'react']
					}
				}
			},
			{
				test: /\.less$/,
				use: [
					{
						loader: "style-loader" // creates style nodes from JS strings
					},
					{
						loader: "css-loader" // translates CSS into CommonJS
					},
					{
						loader: "less-loader" // compiles Less to CSS
					}
				]
			},
            {
                test: /\.css$/,
                loader: 'file-loader',
                options: { name: 'cssFileCompiled.css' }
            }
		]
	},
    devServer: {
        contentBase: [path.join(__dirname, 'dist'), path.join(__dirname, 'static')],
        compress: true,
        port: 9000
    }
};
