const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin') 

const target = process.env.TARGET || 'http://127.0.0.1'
const port = process.env.PORT || 8080
const devServer = {
  port: port,
  compress: true,
  open: true,
  historyApiFallback: {
    index:'/static/'
  },
};

module.exports = {
  entry: "./src/index.ts",
  devtool: process.env.NODE_ENV === 'production'?'source-map':'inline-source-map',
  target: 'web',
  output: {
    filename: "index.[hash:7].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: '/static'
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
    alias:{
      "@": path.resolve(__dirname,'src')
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ["babel-loader"],
        exclude: [/node_modules/]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options:{
              publicPath: './'
            }
          },
          "css-loader",
          'sass-loader'
        ],
        exclude: [/node_modules/]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: [
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
        loader: [
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
      minify:{
        removeComments:true,
        collapseInlineTagWhitespace:true
      }
    }),
    new MiniCssExtractPlugin({
      filename: "styles/[name].[hash:7].css",
      chunkFilename: "styles/[id].[hash:7].css"
    })
  ],
  devServer
};
