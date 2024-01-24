const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.tsx',
	output: {
		path: path.join(__dirname, '/dist'),
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					'style-loader', // 3. Inyecta estilos en el DOM
					'css-loader', // 2. Convierte CSS en CommonJS
					'sass-loader', // 1. Convierte Sass en CSS
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
		}),
	],
	resolve: {
		extensions: ['.ts', '.tsx', '.js'],
		alias: {
			//'@Components': path.resolve(__dirname, 'src/components/'),
		},
	},
};
