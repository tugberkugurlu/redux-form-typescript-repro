const webpack = require('webpack');
const webpackConfig = require('./webpack.config.prod');
const colors = require('colors');

process.env.NODE_ENV = 'production'; // this assures the Babel dev config (for hot reloading) doesn't apply.

console.log('Generating minified bundle for production via Webpack. This will take a moment...'.blue);

webpack(webpackConfig).run(function (err, stats) {
    if (err) { // so a fatal error occurred. Stop here.
        console.log(err.bold.red);
        process.exit(-1);
    }

    const jsonStats = stats.toJson();
    console.log('Webpack stats: ' + stats);

    if (jsonStats.errors.length > 0) {
        process.exit(jsonStats.errors.length);
    } else {
        console.log('Your app has been compiled in production mode and written to /dist. It\'s ready to roll!'.green);
        return 0;
    }
});
