/* globals module */
module.exports = {
    entry: './src/TargetTime/index.js',
    output: {
        libraryTarget: 'umd',
        library: 'TargetTime',
        path: './dist/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader" },
            { test: /\.s?css$/, loaders: ["style", "css", "sass"] }
        ]
    },
    externals: [
        {
            'react-dom': {
                root: 'ReactDOM',
                commonjs2: 'react-dom',
                commonjs: 'react-dom',
                amd: 'react-dom'
            }
        },
        {
            'react': {
                root: 'React',
                commonjs2: 'react',
                commonjs: 'react',
                amd: 'react'
            }
        },
        {
            'moment': {
                root: 'moment',
                commonjs2: 'moment',
                commonjs: 'moment',
                amd: 'moment'
            }
        },
    ]
};
