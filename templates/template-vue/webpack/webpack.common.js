const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: "./src/index.ts",
  output: {
    filename: "index.[hash:7].js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: '/static'
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
    alias:{
      "@": path.resolve(__dirname,'../src')
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          'thread-loader',
          {
            loader: "babel-loader",
            options:{
              cacheDirectory:true
            }
          }
        ],
        exclude: [/node_modules/]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10000,
              name: "static/fonts/[name].[hash:7].[ext]"
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10000,
              name: "static/images/[name].[hash:7].[ext]"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "public/favicon.ico",
      filename: 'index.html',
      title: 'lmn-cli',
      minify:{
        removeComments:true,
        collapseInlineTagWhitespace:true
      }
    })
  ]
};
