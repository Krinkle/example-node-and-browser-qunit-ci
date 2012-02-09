!function (global, undefined) {


	/* Your code goes here! */
	var mylib = function () {
		return true;
	};


	/*
		This is for node.JS, which will easily just use module.exports.
		Note how we say module.exports = mylib, not module.exports.mylib = mylib
		
		This is because we can then access "mylib" straight from require();

	*/
	if (typeof module !== 'undefined' && module.exports) {

        module.exports = mylib;

    /*
		This is for web browsers, which don't have module.exports (unless a
		module system is in place)

		Note how we have also put a noConflict function here, just incase the
        user needs to get back the old thing that was sitting where our new
        thing is...
	*/
    } else {
        var oldlib = global.mylib;
        mylib.noConflict = function () {
            global.mylib = oldlib;
            return mylib;
        };

        global.mylib = mylib;
    }
	
}(this)