var qunit = require('qunit');

qunit.run({
    code: {

		// Include the source code
		path: './src/mylib.js',

		// What global var should it introduce for your tests?
		namespace: 'mylib'

    },
    tests: [

		// Include the test suite(s)
		'./test/mylib.test.js'

    ]
});
