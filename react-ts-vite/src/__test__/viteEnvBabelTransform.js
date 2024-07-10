module.defaults = function () {
	return {
		visitor: {
			MetaProperty(path) {
				path.replaceWithSourceString('process');
			},
		},
	};
};
