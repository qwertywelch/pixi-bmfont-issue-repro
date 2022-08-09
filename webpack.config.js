module.exports = {
	entry: './index.js',
	output: {
		filename: './bundle.js'
	},
	experiments: {
		topLevelAwait: true
	}
};
