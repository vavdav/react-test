var path = require('path');

module.exports = {
	entry: path.resolve(__dirname, 'src/client/app.jsx'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js'
	},

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel?optional[]=runtime&stage=0',
                exclude: /node_modules|bower_components\/jquery\//
            },

            {
                test: /\.jsx$/,
                loader: 'babel?optional[]=runtime&stage=0',
                exclude: /node_modules/
            }
        ]
    }
};