const path = require("path");
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');



module.exports = {
    // defining entry point of the bundle.
    entry:"./src/index.js",
    // defining the output point of the bundle.
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "./dist"), // Here we need pass absolute path.
        publicPath: "dist/" // IMPORTANT: here we specify the public path, the public path tells where all the generated file are located.
                            // example if the app is deploy the public path is http://mydomain.com/
    },
    mode: "none",
    // TerserPlugin for the uglification
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                test: /\.js(\?.*)?$/i
            }
        )],
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env'],
                    plugins: ["@babel/plugin-proposal-class-properties"]
                  }
                }
            },
            {   
                //Example => Every time we try to import a jpg file, Webpack will check if the rules is present.
                test: /\.(png|jpg)$/,   // For add an image. 
                use: [ // Here we specify wich loader should be used by webpack.
                     "file-loader"
                ]
            },
            // {
            //     test: /\.css$/i,
            //     use: [
            //         {
            //             loader: MiniCssExtractPlugin.loader,
            //             options: {
            //               // you can specify a publicPath here
            //               // by default it uses publicPath in webpackOptions.output
            //             //   publicPath: '../',
            //             //   hmr: process.env.NODE_ENV === 'development',
            //             },
            //         },
            //         'style-loader', 'css-loader'],
            // },
            {
                test: /\.scss$/i,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                      // you can specify a publicPath here
                      // by default it uses publicPath in webpackOptions.output
                    //   publicPath: '../',
                    //   hmr: process.env.NODE_ENV === 'development',
                    },
                }, 'css-loader', 'sass-loader'],
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // all options are optional
            filename: '[name].css',
            chunkFilename: '[id].css',
            ignoreOrder: false, // Enable to remove warnings about conflicting order
          }),
    ]
}