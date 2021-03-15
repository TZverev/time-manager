const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
require("@babel/polyfill");

function bableOptions(preset) {
    const opts = {
        presets: [
            '@babel/preset-env',
        ]
    }
    if (preset) {
        opts.presets.push(preset)
    }
    return opts
}

const filename = ext => `[name].[hash].${ext}`


module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        main: ['@babel/polyfill', './index.jsx']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: filename('js')
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        },
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
    ,
    devServer: {
        port: 4200,
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: filename('css')
        }),

    ],
    module: {
        rules: [{
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: bableOptions()
            }
        },
        {
            test: /\.jsx$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: bableOptions("@babel/preset-react")
            }
        },
        {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
        {
            test: /\.scss$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        },
        {
            test: /\.(png | jpg | svg | gif)$/,
            use: ['file-loader']
        },
        {
            test: /\.(ttf|woff|woff2|eot)$/,
            use: ['file-loader']
        },
        ]
    }
}