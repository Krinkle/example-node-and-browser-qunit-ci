(function (global, undefined) {


	/* Your code goes here! */
	var mylib = function () {
		return true;
	};


	/**
	 * Export module for use in node.js.
	 * Note that every module has its own export, we use `module.exports = mylib;`,
	 * not `module.exports.mylib = mylib;`.
	 * This makes it possible to access it straight from require('mylib');
	 * instead of require('mylib').mylib.
	*/
	if (typeof module !== 'undefined' && module.exports) {

		module.exports = mylib;

	} else {
	/**
	 * For web browsers (which don't have module.exports, unless a
	 * module system is in place, in which case it perfectly uses the above).
	 *
	 * Note how we have also put a noConflict function here, just incase the
	 * user needs to get back the old thing that was sitting where our new
	 * thing is...
	 */
		var original_mylib = global.mylib;

		/** Usage: var altLib = mylib.noConflict(); */
		mylib.noConflict = function () {
			global.mylib = original_mylib;
			return mylib;
		};

		global.mylib = mylib;
	}

}(this));
