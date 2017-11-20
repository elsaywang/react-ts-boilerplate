const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');
module.exports = Merge(CommonConfig, {
	devServer: {
		disableHostCheck: true,
		host: '0.0.0.0',
		port: 7000,
		historyApiFallback: true,
	}
});
