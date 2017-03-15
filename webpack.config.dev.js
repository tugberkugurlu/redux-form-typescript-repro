const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

module.exports = {
    devtool: 'eval-source-map',
    resolve: {
        extensions: ['', '.js', '.jsx', '.ts', '.tsx']
    },
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './src/index.tsx'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'assets/bundle.js',
        sourceMapFilename: 'assets/bundle.js.map',
        publicPath: '/',
        devtoolModuleFilenameTemplate: function (info) {
            return 'file:///' + info.absoluteResourcePath;
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new CopyWebpackPlugin([
            { from: 'src/ie-esc', to: 'ie-esc' } // so we can reference the images from static HTML
        ]),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body'
        }),
        new CaseSensitivePathsPlugin()
    ],
    module: {
        loaders: [
            { test: /\.jsx?$/, loaders: ['react-hot-loader/webpack', 'babel'], include: path.join(__dirname, 'src') },
            { test: /\.tsx?$/, loaders: ['react-hot-loader/webpack', 'ts'], include: path.join(__dirname, 'src') },
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
