const path = require('path');
const TerserPlugin = require('terser-webpack-plugin'); // Uglify the bundle
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // Extract the css in specific style bundle
const { CleanWebpackPlugin } = require('clean-webpack-plugin')


// module.exports = {
//     // defining entry point of the bundle.
//     entry:'./src/index.js',
//     // defining the output point of the bundle.
//     output: {
//         filename: 'bundle.[contenthash].js',
//         path: path.resolve(__dirname, './dist'), // Here we need pass absolute path.
//         publicPath: 'dist/' // IMPORTANT: here we specify the public path, the public path tells where all the generated file are located.
//                             // example if the app is deploy the public path is http://mydomain.com/
//     },
//     mode: 'none',
//     // TerserPlugin for the uglification
//     optimization: {
//         minimize: true,
//         minimizer: [
//             new TerserPlugin({
//                 test: /\.js(\?.*)?$/i
//             }
//         )],
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.m?js$/,
//                 exclude: /(node_modules)/,
//                 use: {
//                   loader: 'babel-loader',
//                   options: {
//                     presets: ['@babel/preset-env'],
//                     plugins: ['@babel/plugin-proposal-class-properties']
//                   }
//                 }
//             },
//             {   
//                 //Example => Every time we try to import a jpg file, Webpack will check if the rules is present.
//                 test: /\.(png|jpg)$/,   // For add an image. 
//                 use: [ // Here we specify wich loader should be used by webpack.
//                      'file-loader'
//                 ]
//             },
//             {
//                 test: /\.css$/i,
//                 use: [MiniCssExtractPlugin.loader, 'css-loader'],
//             },
//             {
//                 test: /\.scss$/i,
//                 use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
//             },
//         ]
//     },
//     plugins: [
//         new MiniCssExtractPlugin({
//             // Options similar to the same options in webpackOptions.output
//             // all options are optional
//             filename: 'style.[contenthash].css',
//             // chunkFilename: '[id].css',
//             // ignoreOrder: false, // Enable to remove warnings about conflicting order
//           }),
//         new CleanWebpackPlugin({
//             cleanOnceBeforeBuildPatterns: [
//                 '**/*', // this means clean all file bundle in publicPath
//                 path.join(process.cwd(), 'build_example/**/*')

//             ]
//         })
//     ]
// }

let config = {
}

var distConfig = Object.assign({}, config, {
    entry:'./src/index.js',
    // defining the output point of the bundle.
    output: {
        filename: 'bundle.[contenthash].js',
        path: path.resolve(__dirname, './dist'), // Here we need pass absolute path.
        publicPath: 'dist/' // IMPORTANT: here we specify the public path, the public path tells where all the generated file are located.
                            // example if the app is deploy the public path is http://mydomain.com/
    },
    mode: 'none',
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
            filename: 'style.[contenthash].css',
            // chunkFilename: '[id].css',
            // ignoreOrder: false, // Enable to remove warnings about conflicting order
          }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [
                '**/*', // this means clean all file bundle in publicPath
                path.join(process.cwd(), 'build_example/**/*')

            ]
        })
    ]
})

let secondOutputExample = Object.assign({}, config, {
    entry:'./src/index.js',
    // defining the output point of the bundle.
    output: {
        filename: 'bundle.[contenthash].js',
        path: path.resolve(__dirname, './dist_second_output_example'), // Here we need pass absolute path.
        publicPath: 'dist_second_output_example/' // IMPORTANT: here we specify the public path, the public path tells where all the generated file are located.
                            // example if the app is deploy the public path is http://mydomain.com/
    },
    mode: 'none',
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
            filename: 'style.[contenthash].css',
            // chunkFilename: '[id].css',
            // ignoreOrder: false, // Enable to remove warnings about conflicting order
          }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [
                '**/*', // this means clean all file bundle in publicPath
                path.join(process.cwd(), 'build_example/**/*')

            ]
        })
    ]
})


module.exports = [
    distConfig, secondOutputExample
]