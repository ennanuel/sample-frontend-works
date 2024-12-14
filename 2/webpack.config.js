const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    "entry": {
        bundle: "./2/index.js"
    },
    "output": {
        path: path.resolve(__dirname, 'dist'),
        pathinfo: false,
        filename: "[name].js",
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./2/index.html"        
        })
    ],
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
            historyApiFallback: true
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: "babel-loader"
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader", "postcss-loader"]
            },
            {
              test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif|webp|mp4|avif)$/i,
              type: 'asset',
            }
        ]
    },
    cache: {
        type: 'filesystem',
    },
    devServer: {
        devMiddleware: {
            writeToDisk: true
        }
    },
    experiments: {
        lazyCompilation: {
          imports: true,
          entries: true,
        },
        cacheUnaffected: true,
    }
}