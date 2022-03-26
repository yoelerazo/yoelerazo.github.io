const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const root = path.resolve(__dirname, "..");
const distFolder = path.join(root, 'dist');

module.exports = (env, argv) => {
	const isDevMode = argv.mode === "development";
	const devtool = isDevMode ? "inline-source-map" : "source-map";
	const envs = {
		DEBUG: isDevMode ? true : false,
		PUBLIC_PATH: ""
	}

	return {
		entry: path.join(root, 'src/index.js'),
		output: {
			filename: 'bundle.js',
			path: distFolder
		},
		devtool: devtool,
		devServer: {
			contentBase: distFolder,
			compress: true,
			hot: true,
			port: 3000,
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: /(node_modules)/,
					use: 'babel-loader'
				},
				{
					test: /\.((c|sa|sc)ss)$/,
					use: ["style-loader", "css-loader", "sass-loader"]
				},
				{
					test: /\.jpg|png|gif|woff|eot|ttf|svg|wav|mp3|mp4|m4a|webm|ogg/,
					type: 'asset/resource',
					generator: {
						filename: '[hash][ext]'
					},
				}
			]
		},
		resolve: {
			modules: ['node_modules', path.join(root, "src")],
			alias: {
				'components': path.join(root, 'src/components'),
				'containers': path.join(root, 'src/containers'),
				'pages': path.join(root, 'src/pages'),
				'shared': path.join(root, 'src/components/shared'),
				'styles': path.join(root, 'src/styles'),
			}
		},
		node: {
			__filename: true,
			__filename: true
		},
		plugins: [
			new webpack.HotModuleReplacementPlugin(),
			new HtmlWebpackPlugin({
				title: 'Yoel Erazo',
				template: path.join(root, "src", "index.html")
			}),
			new CleanWebpackPlugin({
				cleanOnceBeforeBuildPatterns: ['*.js', '*.css', 'assets/*']
			}),
			new webpack.DefinePlugin({
				"process.env": JSON.stringify(envs)
			})
		]
	};
}