[![Build Status](https://travis-ci.org/Krinkle/travis-ci-node-and-browser-qunit.svg?branch=master)](https://travis-ci.org/Krinkle/travis-ci-node-and-browser-qunit) [![Code coverage](https://img.shields.io/codecov/c/github/Krinkle/travis-ci-node-and-browser-qunit.svg)](https://codecov.io/gh/Krinkle/travis-ci-node-and-browser-qunit)

# Run QUnit in Node.js and Chrome! (using Travis CI)

This project is an example of how to approach continuous integration
by running QUnit tests inside a headless browser (Chrome) and/or inside Node.js.

## Get started

Clone or fork this repository and be sure to run the following two commands to
install the dependencies and start the first test run:

<pre lang="bash">
npm install
npm test
</pre>

## Tell me more

[Travis CI](https://travis-ci.org/) provides cloud-based [Continuous integration](https://en.wikipedia.org/wiki/Continuous_integration) for open source projects on GitHub. After you enable it, Travis CI will automatically run the tests and report back whenever you `git push`,
or submit a pull-request.

This boilerplate repository has Travis enabled ([view build history](https://travis-ci.org/Krinkle/travis-ci-node-and-browser-qunit)).

Just get into it, have a look at it all, you'll get the hang of it, it's easy!
If you've got any problems, feel free to ask on Twitter or [file an issue](https://github.com/Krinkle/travis-ci-node-and-browser-qunit/issues).

* [@Krinkle](https://github.com/Krinkle) ([Twitter](https://twitter.com/TimoTijhof))
* [@keithamus](https://github.com/keithamus) ([Twitter](https://twitter.com/keithamus))

By default, Travis-CI will execute the `npm test` command, which in this example
repository runs `grunt test` and `node test/node-index.js`. The Gruntfile takes care
of running ESLint and running the QUnit tests in Headless Chrome.
The second script runs the unit tests in Node.js (without a browser environment).

Depending on the kind of project you have you may want to keep only one of these.

If your application only runs in a browser:
* Remove `test/node-test.js`
* Remove the `qunit test/node-index.js` command from `scripts.test` in `package.json`

If your app is written specifically for Node.js only, then:
* Remove `karma.conf.js`
* Remove the `karma-debug` run script from `package.json`
* Remove `karma` and `karma-*` from the `devDependencies` in `package.json`
