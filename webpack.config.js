const path = require("path");
const TerserPlugin = require('terser-webpack-plugin');


module.exports = {
    // TerserPlugin for the uglification
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                test: /\.js(\?.*)?$/i
            }
        )],
    },
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
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.scss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ]
    }
}