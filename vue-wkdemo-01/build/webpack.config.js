var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {

    entry: path.resolve(__dirname, '../app/index/index.js'),
    output:{
        path: path.resolve(__dirname, '../output/static'),
        publicPath: 'static/',
        filename: '[name].[hash].js',
        chunkFilename: '[id].[chunkhash].js'
    },

    resolve: {
      extensions: ['*', '.js', '.vue'],
      alias: {
          'Vue': 'vue/dist/vue.js'
      }
    },

    module: {
        rules:[
            {
              test: /\.vue$/,
              loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            }
        ]
    },

    plugins: [
        // make sure to include the plugin!
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            filename: '../index.html',
            template: path.resolve(__dirname, '../app/index/index.html'),
            inject: true
        })
    ]

}