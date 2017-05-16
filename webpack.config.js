// to fix the "The provided value ./Release is not an absolute path!" issue
const path = require('path');

module.exports = {

    entry: './Develop/entry.js',

    output: {
        path: path.resolve(__dirname, 'Release'),
        filename: 'build.js'
    },

    module: {

        rules: [

            // For CSS Files
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            },

            // For SCSS Files
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'resolve-url-loader'
                    },
                    {
                        loader: 'sass-loader?sourceMap'
                    }
                ]
            },

            // For Img Assets
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    {
                        loader: "file-loader?name=[name].[ext]&outputPath=assets/images/"
                    }
                ]
            },

            // For Font Assets , Deleted svg , Because Would Conflict with Images
            {
                test: /\.(eot|otf|ttf|woff|woff2)$/,
                use: [
                    {
                        // we already have the path release
                        loader: "file-loader?name=[name].[ext]&outputPath=assets/fonts/"
                    }
                ]
            }

        ]

    }

}
