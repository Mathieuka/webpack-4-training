const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // Extract the css in specific style bundle
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry:{
        'hello-world': './src/hello-world.js',
        'kiwi': './src/kiwi.js'
    },
    // defining the output point of the bundle.
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, './dist'), // Here we need pass absolute path.
        publicPath: '../' // IMPORTANT: here we specify the public path, the public path tells where all the generated file are located.
                            // example if the app is deploy the public path is http://mydomain.com/
    },
    mode: 'production',
    optimization: {     // that is for create a separate bundle for some common dependencies like Lodash and other libraries or framework, 
        splitChunks: {  // think to add to HtmlWebpackPlugin chunks for integrated vendor.
            chunks: 'all',
            minSize: 5000, //specific min size to split in a specific bundle vendor (example for react)
            automaticNameDelimiter: '_' // custom name delimiter
        }
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
                    plugins: ['@babel/plugin-proposal-class-properties']
                  }
                }
            },
            {   
                //Example => Every time we try to import a jpg file, Webpack will check if the rules is present.
                test: /\.(png|jpg)$/,   // For add an image. 
                use: [ // Here we specify wich loader should be used by webpack.
                     'file-loader'
                ]
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.scss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // all options are optional
            filename: '[name].[contenthash].css',
            // chunkFilename: '[id].css',
            // ignoreOrder: false, // Enable to remove warnings about conflicting order
          }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [
                '**/*', // this means clean all file bundle in publicPath
                path.join(process.cwd(), 'build_example/**/*')
            ]
        }),
        new HtmlWebpackPlugin({
            title: 'Hello world',
            filename: 'hello-world/hello-world.html',
            meta: {
                description: 'Some hello-world description'
            },
            chunks: ['hello-world', 'vendors~hello-world~kiwi'] // specifies which bundle is used for this .html
        }),
        new HtmlWebpackPlugin({
            title: 'Kiwi ',
            filename: 'kiwi/kiwi.html',
            meta: {
                description: 'Some kiwi description'
            },
            chunks: ['kiwi', 'vendors~hello-world~kiwi'] // specifies which bundle is used .html
        })
    ]
 }



