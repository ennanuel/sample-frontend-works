const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    "entry": "./1/index.js",
    "output": {
        path: path.resolve(__dirname, 'dist'),
        pathinfo: false,
        filename: "bundle.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./1/index.html"
        })
    ],
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
              test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif|webp|mp4)$/i,
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