const config = require('./tasks/config');
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
	mode: process.env.NODE_ENV,
	entry: {
		app: config.scripts.input,
	},
	output: {
		filename: '[name].js',
		path    : config.scripts.output
	},
	devtool: process.env.NODE_ENV === 'development' ? 'source-map' : false,
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: '/node_modules/'
			},{
        test  : /\.vue$/,
        loader: 'vue-loader'
      }
    ]
	},
  plugins: [
      new VueLoaderPlugin()
  ],
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@utils': path.resolve(__dirname, 'src/assets/scripts/utils/'),
      '@components': path.resolve(__dirname, 'src/components/'),
    }
  },
	devServer: {
		overlay: false
	}
}
