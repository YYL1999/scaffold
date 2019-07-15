const path =require("path")
const webpack=require("webpack")
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    entry: ["./src/index.js"],
    output: {
        // 输出目录
        path: path.join(__dirname, "dist"),
        // 文件名称
        filename: "index.js"
    },
    module:{
        rules:[
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                  {
                    loader: "babel-loader"
                  }
                ]
              },
            //   {
            //     test:/\.(sc|sa|c)ss$/,
            //     loader:"style-loader!css-loader!postcss-loader!sass-loader"
            //   },
            {
                test:/\.scss$/,
                loader: [
                    MiniCssExtractPlugin.loader,
                    "css-loader", // 编译css
                    "postcss-loader", // 使用 postcss 为 css 加上浏览器前缀
                    "sass-loader" // 编译scss
                ]
            },
              {
                test: /\.(png|jpg|jpeg|gif|svg)/,
                use: {
                  loader: 'url-loader',
                  options: {
                    outputPath: 'images/', // 图片输出的路径
                    limit: 10 * 1024
                  }
                }
            },
            {
                test: /\.(eot|woff2?|ttf|svg)$/,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      name: '[name]-[hash:5].min.[ext]',
                      limit: 5000, // fonts file size <= 5KB, use 'base64'; else, output svg file
                      publicPath: 'fonts/',
                      outputPath: 'fonts/'
                    }
                  }
                ]
              }
        ]
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename:"index.html",
            template:path.resolve(__dirname,"..","public/index.html"),
            minify:{
                collapseWhitespace:true
            }
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]
}