const path=require("path")
const webpack = require ("webpack")
const merge = require("webpack-merge")
const commonConfig = require ("./webpack.base.config")
const PurifyCSS = require('purifycss-webpack')
const glob = require("glob-all")
module.exports=merge(commonConfig,{
    mode:"production",
    output: {
        // 输出目录
        path: path.resolve(__dirname, "../dist"),
        // 文件名称
        filename: '[name].[contenthash].js',
        chunkFilename: '[name].[contenthash].js'
    },
    optimization:{
        usedExports:true,
        splitChunks:{
            chunks:"all",
            cacheGroups:{
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors'
                }
            }
        }
    },
    plugins:[
        new PurifyCSS({
            paths:glob.sync([
                path.resolve(__dirname, '..', 'src/*.html'),
                path.resolve(__dirname, '..', 'src/*.js'),
                path.resolve(__dirname, '..', 'src/**/*.jsx'), 
            ])
        })
    ]
})