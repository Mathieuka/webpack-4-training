const path = require("path");

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
    module: {
        rules: [
            {   
                //Example => Every time we try to import a jpg file, Webpack will check if the rules is present.
                test: /\.(png|jpg)$/,   // For add an image. 
                use: [ // Here we specify wich loader should be used by webpack.
                     "file-loader"
                ]
            }
        ]
    }
}