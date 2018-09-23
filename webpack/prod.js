import webpack from 'webpack';
// import CopyWebpackPlugin from 'copy-webpack-plugin';
import baseConfig from './base';

const config = {
    ...baseConfig,

    plugins: [
        ...baseConfig.plugins,
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
            },
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        // new CopyWebpackPlugin([
        //     { from: './images', to: 'images' },
        //     { from: './manifest.json', to: 'manifest.json' },
        // ]),
    ],
};

export default config;
