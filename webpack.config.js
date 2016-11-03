module.exports = {
    entry : './src/main.js',
    output: {
        path    : 'build',
        filename: 'bundle.js'
    },
    devServer: {
        inline: true, // in a actual Window
        contentBase: './build',
        port: 3000
    },
    module: {
        loaders: [
            {
                test   : /\.js$/, // search for all Files ending with .js
                exclude: /node_module/,
                loader : 'babel-loader'
            },
            {
                test   : /\.css$/,
                loader : 'style-loader!css-loader'
            },
            {
                test   : /\.scss$/,
                loader : 'style-loader!css-loader!sass-loader'
            }
        ]
    }
}
