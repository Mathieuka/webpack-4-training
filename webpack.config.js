const path = require("path");

module.exports = {
    // defining entry point of the bundle
    entry:"./src/index.js",
    // defining the output point of the bundle
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "./dist") // here we need pass absolute path
    },
    mode: "none"
}