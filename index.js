var path = require("path");

global.steal = {
	nodeRequire: require,
	root: path.resolve(__dirname, "..")
};

var steal = module.exports = require("steal");

// Steal everything we are going to export.
steal("steal-tools/build",
	"steal-tools/install",
	function(){

	// Export all of the things that are part of the public API.
	var exporting = [ "build", "install" ];
	for(var idx in exporting) {
		steal[exporting[idx]] = arguments[idx];
	}

	steal.config({
		moduleRoot: path.resolve(__dirname, "../..")
	});

});
