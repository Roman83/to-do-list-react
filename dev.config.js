const webpack = require('webpack');
module.exports = {
    devtool: 'cheap-module-eval-source-map',
    output: {
        publicPath: '/dist/'
    },
    plugins: [
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"development"'
        },
        __DEVELOPMENT__: true
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ]
};
