import webpack from 'webpack';
import baseConfig from './base';

const config = {
    ...baseConfig,

    mode: 'development',

    devtool: 'eval',

    plugins: [
        ...baseConfig.plugins,
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development'),
            },
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.LoaderOptionsPlugin({
            debug: true,
        }),
    ],

    devServer: {
        quiet: true,
        hot: true,
        port: '8000',
        inline: true,
        progress: true,
        historyApiFallback: true,
    },
};

export default config;
