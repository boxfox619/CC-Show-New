const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const port = process.env.PORT || 8080;

module.exports = {
    entry: {
        'vendor': ['react', 'react-dom'],
        'app': path.resolve(__dirname, 'src', 'index.tsx'),
    },
    output: {
        path: __dirname + '/dist/',
        filename: '[name].bundle.js'
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx'],
        alias: {
            '@': path.join(__dirname, 'src')
        },
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'ts-loader',
                    },
                ],
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(ico|png|jpg|jpeg|gif|svg)$/,
                loader: 'url-loader',
                options: {
                    name: '[hash].[ext]',
                    limit: 10000,
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            favicon: 'public/favicon.ico'
        }),
        new CopyPlugin([
            'public'
        ])
    ],
    devtool: 'inline-source-map',
    devServer: {
        host: 'localhost',
        port: port,
        open: true,
        historyApiFallback: true
    },
};