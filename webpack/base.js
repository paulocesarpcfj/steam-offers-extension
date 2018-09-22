import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const rootPath = path.join(__dirname, '../', 'src');

const config = {
    entry: [
        path.join(__dirname, '../', 'src', 'app'),
    ],

    output: {
        path: path.join(__dirname, '../', 'dist'),
        filename: 'js/[name].js',
    },

    resolve: {
        alias: {
            components: `${rootPath}/components`,
            containers: `${rootPath}/containers`,
            actions: `${rootPath}/actions`,
            reducers: `${rootPath}/reducers`,
            services: `${rootPath}/services`,
            views: `${rootPath}/views`,
        },
        extensions: ['.js', '.jsx', '.scss', '.css']
    },

    module: {
        rules: [
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: 'css-loader',
                    },
                    {
                        loader: 'sass-loader',
                    }],
                }),
            },

            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
            },

            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: [/node_modules/, /src\/styles\/vendor/],
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
        }),
        new ExtractTextPlugin('css/style.css'),
    ],
};

export default { ...config };
