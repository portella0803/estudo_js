module.export = {
    entry: './main.js',
    output: {
        path: __dirname + '/public',
        filename:'./bundle.js',
    },
    modules: {
        rules: [
            {
                test:/\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ],
    }
};