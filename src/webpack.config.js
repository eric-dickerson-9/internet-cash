module.exports = {
    // Other webpack configuration...

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            // Other rules...
        ],
    },
};