module.exports = {
    entry: "./frontend/index.js",
    output: {
        path: __dirname,
        filename: "dist/js/front.js"

    },
    module: {
        loaders: [
            { test: /\.js$/,
              exclude: /(node_modules|bower_components)/,
              loader: 'babel-loader',
              query: {
                  presets: ['es2015']
              },
            }
        ]
    }
};
