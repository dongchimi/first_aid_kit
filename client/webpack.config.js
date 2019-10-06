const path = require("path");
const BundleTracker = require('webpack-bundle-tracker');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const devMode = process.env.NODE_ENV !== 'production';

let cleanOptions = {
    root: __dirname,
    exclude: [],
    verbose: true,
    dry: false
};

module.exports = {
    context: __dirname,

    stats: devMode ? 'minimal' : 'verbose',

    entry: {
        main: ['./src/index.js']
    },
    output: {
        path: path.resolve('./dist/bundles'),
        filename: "bundle.[name].[chunkhash].js",
        publicPath: "/assets/",
    },

    plugins: [
        new CleanWebpackPlugin(cleanOptions),
        new BundleTracker({filename: './webpack-stats.json'}),
        new MiniCssExtractPlugin({
            filename: "bundle.[name].[chunkhash].css",
            chunkFilename: "bundle.[id].[chunkhash].css"
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                include: path.resolve(__dirname, 'src'),
                use: ['babel-loader']

            },
            {
                test: /\.(css|scss)$/,
                use: [
                    devMode ? 'style-loader' :
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                // you can specify a publicPath here
                                // by default it use publicPath in webpackOptions.output
                                // publicPath: '../'
                            }
                        },
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|svg|jpg|gif|ico)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    chunks: 'initial',
                    test: 'vendor',
                    name: 'vendor',
                    enforce: true
                }
            }
        },
        minimizer: [
            new TerserPlugin({
                extractComments: true,
                cache: true,
                parallel: true,
                sourceMap: true, // Must be set to true if using source-maps in production
                terserOptions: {
                    // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
                    extractComments: 'all',
                    compress: {
                        drop_console: true,
                    },
                }
            })]
    }
};