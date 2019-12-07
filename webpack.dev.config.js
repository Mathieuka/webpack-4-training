const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry:{
        'hello-world': './src/hello-world.js',
        'kiwi': './src/kiwi.js'
    },
    // defining the output point of the bundle.
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'), // Here we need pass absolute path.
        publicPath: '' // IMPORTANT: here we specify the public path, the public path tells where all the generated file are located.
                            // example if the app is deploy the public path is http://mydomain.com/
    },
    mode: 'development',
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        //compress: true,
        index: 'hello-world.html',
        port: 9000
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
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.scss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [
                '**/*', // this means clean all file bundle in publicPath
                path.join(process.cwd(), 'build_example/**/*')

            ]
        }),
        new HtmlWebpackPlugin({
            filename: 'hello-world.html',
            title: 'Hello world',
            meta: {
                description: 'Some hello-world description'
            },
            chunks: ['hello-world']
        }),
        new HtmlWebpackPlugin({
            filename: 'kiwi.html',
            title: 'Kiwi',          
            meta: {
                description: 'Some kiwi description'
            },
            'chunks':['kiwi']
        })
    ]
}