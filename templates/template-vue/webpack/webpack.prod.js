const merge = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common,{
    mode: "production",
    devtool: "cheap-module-source-map",
    optimization:{
        usedExports:true
    }, 
    module:{
        rules:[
            {
                test: /\.scss$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ],
                exclude: [/node_modules/]
            }
        ]
    }
})