
const fs = require('fs')
const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common')
const webpack  = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')

const port = process.env.PORT || 8080
const devServer = {
	port: port,
	compress: true,
	open: true,
	historyApiFallback: {
		index: '/static/'
	}
}

module.exports = merge(common, {
	mode: 'development',
	devtool: 'cheap-module-eval-source-map',
	module: {
		rules: [
			{
				test: /\.scss$/,
				use:[
					MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader',
					'sass-loader'
				],
				exclude:[/node_modules/]
			} 
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'styles/[name].[hash:7].css',
			chunkFilename: 'styles/[id].[hash:7].css'
		}),
		new webpack.DllReferencePlugin({
			manifest: require(path.join(__dirname,'../cache','vendor_manifest.json'))
		}),
		new AddAssetHtmlPlugin({
			filepath: path.resolve(__dirname,'../cache/*.dll.js')
		})
	],
	devServer
})
