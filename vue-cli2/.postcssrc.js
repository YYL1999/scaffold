module.exports = {
    plugins: [
        //px to vw
        // require('postcss-px2viewport')
        require('postcss-px2rem')({remUnit: 100}), // 换算的基数
    ],
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: "style-loader!css-loader!postcss-loader"
            }
        ]
    },
    postcss: function () {
        //px to vw 
        //css 标记
        // /*px*/的，则转换为[data-dpr="1"]、[data-dpr="2"]、[data-dpr="3"]三种不同的字体
        // /*no*/的，则不做处理，依然使用px进行布局
       // return [px2viewport({ viewportWidth:1444 })];
    }
  }