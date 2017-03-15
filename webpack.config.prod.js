const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

const GLOBALS = {
    'process.env.NODE_ENV': JSON.stringify('production')
};

module.exports = {
    debug: true,
    devtool: 'source-map',
    resolve: {
        extensions: ['', '.js', '.jsx', '.ts', '.tsx']
    },
    entry: './src/index.tsx',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'assets/bundle.[hash].js',
        publicPath: '/'
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new CleanWebpackPlugin(['dist'], { root: __dirname, verbose: false }),
        new CopyWebpackPlugin([
            { from: 'src/ie-esc', to: 'ie-esc' } // so we can reference the images from static HTML
        ]),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin(GLOBALS),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body'
        }),
        new CaseSensitivePathsPlugin()
    ],
    module: {
        loaders: [
            { test: /\.jsx?$/, loaders: ['babel'], include: path.join(__dirname, 'src') },
            { test: /\.tsx?$/, loader: 'ts', include: path.join(__dirname, 'src') },
            { test: /(\.css)$/, loaders: ['style', 'css'] },
            { test: /\.scss$/, loaders: ['style', 'css', 'sass'] },
            { test: /\.less$/, loader: 'style!css!less' },
            { test: /\.json$/, loader: 'json' },
            { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff&name=assets/[name].[hash].[ext]' },
            { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff&name=assets/[name].[hash].[ext]' },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream&name=assets/[name].[hash].[ext]' },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file?name=assets/[name].[hash].[ext]' },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml&name=assets/[name].[hash].[ext]' },
            { test: /\.(jpg|png|jpeg)$/, loader: 'file?name=assets/images/[name].[hash].[ext]' },
            { test: require.resolve('jquery'), loader: 'expose?jQuery!expose?$' }
        ]
    }
};
