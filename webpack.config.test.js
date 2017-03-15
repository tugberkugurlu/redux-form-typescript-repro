const nodeExternals = require('webpack-node-externals');

module.exports = {
    target: 'node',
    externals: [nodeExternals()],
    resolve: {
        extensions: ['', '.js', '.jsx', '.ts', '.tsx']
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, loaders: ['babel'] },
            { test: /\.tsx?$/, loader: 'ts' },
            { test: /\.json$/, loader: 'json' },
            { test: /\.css$/, loaders: 'null-loader' },
            { test: /\.scss$/, loaders: 'null-loader' },
            { test: /\.less$/, loader: 'null-loader' },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'null-loader' },
            { test: /\.(jpg|png|jpeg)$/, loader: 'null-loader' }
        ]
    }
};
