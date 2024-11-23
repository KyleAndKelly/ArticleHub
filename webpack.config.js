const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const webpack = require('webpack');
// const { config } = require('process');

config =  {
  entry: {
    'login':path.resolve(__dirname,'page/login/index.js'),
    'content':path.resolve(__dirname,'page/content/index.js'),
    'publish':path.resolve(__dirname,'page/publish/index.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'), 
    filename: './[name]/index.js',
    clean:true
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: './page/login/index.html', 
      filename: './login/index.html', 
      chunks:['login']
    }),
    new HtmlWebpackPlugin({
      template: './page/content/index.html', 
      filename: './content/index.html', 
      chunks:['content']
    }),
    new HtmlWebpackPlugin({
      template: './page/publish/index.html', 
      filename: './publish/index.html', 
      chunks:['publish']
    }),
    new MiniCssExtractPlugin({
        filename: "./[name]/index.css", // 提取后的 CSS 文件名
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV' :JSON.stringify(process.env.NODE_ENV)
    }
    )
  ],
  module: { // 加载器
    rules: [ // 规则列表
      {
        test: /\.css$/i, // 匹配 .css 结尾的文件
        use: [ process.env.NODE_ENV === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset',
        generator: {
          filename: 'assets/[hash][ext][query]'
        }
      }
    ],

  },
  optimization: {
    // 最小化
    minimizer: [
      // 在 webpack@5 中，你可以使用 `...` 语法来扩展现有的 minimizer（即 
      // `terser-webpack-plugin`），将下一行取消注释（保证 JS 代码还能被压缩处理）
      `...`,
      new CssMinimizerPlugin(),
    ],
    },
    devServer: {
      static: path.resolve(__dirname, 'dist'), // 提供静态文件服务
      port: 8080, // 端口号
      open: true, // 自动打开浏览器
      devMiddleware: {
        writeToDisk: true, // 将打包文件写入硬盘
      },
      historyApiFallback: {
        rewrites: [
          { from: /./, to: '/login/index.html' } // 默认加载login页面
        ]
      }
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '')
      }
    },

    
};

if(process.env.NODE_ENV === 'development') {
  config.devtool = 'inline-source-map'
}
module.exports = config

