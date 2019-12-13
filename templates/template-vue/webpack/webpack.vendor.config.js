const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const outputPath = path.resolve(__dirname,'../cache');

module.exports = {
    mode: 'development',
    entry:{
        vendor: ['vue','vuex','vue-router']
    },
    output:{
        path: outputPath,
        filename: '[name]_[hash].dll.js',
        library: '[name]_[hash]'
    },
    plugins:[
        new CleanWebpackPlugin(),
        new webpack.DllPlugin({
            path: path.resolve(outputPath,"[name]_manifest.json"),
            name: '[name]_[hash]'
        })
    ]
}