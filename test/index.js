const qunit = require('qunit');

qunit.run({

    code: {

        /* Include your CODE to test here */
        path: './mylib.js',
        // What global var should it introduce for your tests?
        namespace: 'mylib'

    },
    tests: [

        /* Include your TESTS to run here */
        'mylib.test.js'

    ].map(function (v) { return './test/' + v })
});