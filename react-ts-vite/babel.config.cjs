module.exports = {
	presets: [
		[
			'@babel/preset-env',
			{
				targets: {
					node: 'current',
				},
			},
		],
		'@babel/preset-typescript',
		[
			'@babel/preset-react',
			{
				runtime: 'automatic',
			},
		],
	],
	plugins: [
		function abc() {
			return {
				visitor: {
					MetaProperty(path) {
						path.replaceWithSourceString('process');
					},
				},
			};
		},
	],
};
