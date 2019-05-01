/* eslint-disable */
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const paths = {
    lib: path.resolve(__dirname, '.'),
    entry: path.resolve(__dirname, './index'),
    output: path.resolve(__dirname, './dist'),
};

module.exports = {
    mode: 'production',
    entry: paths.entry,
    output: {
        filename: 'index.js',
        path: paths.output,
        libraryTarget: 'umd'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
        symlinks: true,
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
                            '@babel/plugin-proposal-class-properties',
                        ],
                    },
                },
                test: /\.(tsx?)|(jsx?)$/,
                include: [paths.lib],
            },

        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
    ],
};
