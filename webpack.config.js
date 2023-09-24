const path = require('path');

module.exports = {
    // Entry point for the application
    entry: './src/index.js',
    mode: 'production',

    // Output configuration
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
    },

    module: {
        rules: [
            {   
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                // use: [
                //     {
                //       loader: 'file-loader',
                //       options: {
                //         outputPath: 'assets/scene',
                //       },
                //     },
                // ],
            },  
            {
                test: "/\.js$/", // Apply this rule to files ending in .js
                exclude: "/node_modules/", // Exclude node_modules directory
                use: {
                    loader: 'babel-loader', // Use babel-loader to transpile JavaScript
                }
            },
        ],
    },
};