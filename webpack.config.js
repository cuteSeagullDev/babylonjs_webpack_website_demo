const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        assetModuleFilename: '[name][ext]'
    },
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        open: true,
        hot: true
    },
    module: {
        rules: [
            { 
                test: /\.css$/, 
                use: [
                    'style-loader',
                    'css-loader' 
                ]
            },
            { 
                test: /\.(glb|gltf|hdr)$/i,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 8192
                    }
                }
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack App',
            filename: 'index.html',
            template: 'src/template.html'
        })
    ]
}