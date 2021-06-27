const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        main: './index.js',
        analytics: './analytics.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: dist
    },
    plugins: [
        new HTMLWebpackPlugin({
            filename: './index.html',
            template: './pug/index.pug',
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.pug$/,
                use: ['pug-loader']
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },

        ]
    }
}