const path = require('path');

module.exports = {
    // Entry point for the application
    entry: './src/index.mjs',
    mode: 'production',

    // Output configuration
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
    },

    module: {
        rules: [
            {
                test: "/\.js$/", // Apply this rule to files ending in .js
                exclude: "/node_modules/", // Exclude node_modules directory
                use: {
                    loader: 'babel-loader', // Use babel-loader to transpile JavaScript
                }
            },
        ],
    },

    // ...other configurations
  resolve: {
    fallback: {
      "util": require.resolve("util/")
    }
  }
};