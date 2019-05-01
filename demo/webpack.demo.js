/* eslint-disable */
const path = require('path');
const webpackDemo = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin/dist/clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const paths = {
    app: path.resolve(__dirname, '.'),
    entry: path.resolve(__dirname, './index'),
    lib: path.resolve(__dirname, '../index'),
    template: path.resolve(__dirname, './index.html'),
    output: path.resolve(__dirname, './build'),
    bundle: path.resolve(__dirname, './build/js/*'),
};

module.exports = {
    mode: 'development',
    entry: paths.entry,
    output: {
        path: paths.output,
        publicPath: '/',
        filename: './js/[name].[hash].js',
    },
    devServer: {
        port: 8000,
        contentBase: paths.output,
        publicPath: '/',
        overlay: true,
        compress: true,
        historyApiFallback: true,
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
        symlinks: true,
        alias: {
            'react-dom': '@hot-loader/react-dom',
            'react-styled-floating-label': paths.lib,
        }
    },
    module: {
        rules: [
            {
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                        babelrc: false,
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react',
                            '@babel/preset-typescript',
                        ],
                        plugins: [
                            'react-hot-loader/babel',
                            '@babel/plugin-proposal-class-properties',
                        ],
                    },
                },
                test: /\.(tsx?)|(jsx?)$/,
                include: [paths.app, paths.lib],
            },

        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: paths.template,
        }),
        new CleanWebpackPlugin(),
        new webpackDemo.HotModuleReplacementPlugin(),
    ],
};
