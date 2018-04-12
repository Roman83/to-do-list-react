const path = require('path');
const autoprefixer = require('autoprefixer');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const development = require('./dev.config.js');
const production = require('./prod.config.js');

require('babel-polyfill').default;

const TARGET = process.env.npm_lifecycle_event;

process.env.BABEL_ENV = TARGET;

const common = {
    entry: {
        'index.js': './src/index.js',
        'style.css': './src/style.scss'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]'
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader', 'eslint-loader'],
            exclude: /node_modules/
        }, {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader']
            })
        }]
    },
    plugins: [
        new ExtractTextPlugin('style.css'),
        new CopyWebpackPlugin([{
                from: 'index.html',
                to: 'index.html',
                toType: 'file'
        },], {'copyUnmodified': true})
    ]
};

if (TARGET === 'start' || !TARGET) {
    module.exports = merge(development, common);
}
if (TARGET === 'build' || !TARGET) {
    module.exports = merge(production, common);
}
