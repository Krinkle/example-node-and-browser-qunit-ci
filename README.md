[![Build Status](https://secure.travis-ci.org/Krinkle/travis-ci-node-and-browser-qunit.png)](http://travis-ci.org/Krinkle/travis-ci-node-and-browser-qunit)

# Run QUnit tests in NodeJS + WebKit using Travis CI!

This project is a little demonstration of how to get a javascript library using
continuous integration by running QUnit tests inside a fake browser (phantomjs) 
and/or inside nodejs (depending on whether your library is intended for usage
in either or both platforms).

Frontend developers seem to have very little exposure to TDD and CI.

# What is TDD and CI?

The typical process when you write some code for a client or project may be to
write the code, then test to make sure it works, then you push it to your VCS 
(e.g. git), and when that is done you can package it all up and upload it to
where it needs to go (as in, live on the server). So it looks a little like:

    coding -> testing -> pushing -> packaging -> deploying

Thing is, you can automate pretty much all of these steps, with TDD and CI:

* [TDD](https://en.wikipedia.org/wiki/Test-driven_development)
* [CI](https://en.wikipedia.org/wiki/Continuous_integration)

# Get started

Clone or fork this repository and be sure to run the following two commands to
install the dependencies:
```bash
git submodule update --init
npm install
```

# Tell me more

There is an awesome project called [Travis CI](http://travis-ci.org/) which is
a cloud-based CI, for open source projects. It is built for GitHub so you can
make a project in github, and hook it up to Travis. Then, whenver you push,
Travis CI will automatically run the tests and report back on any problems.

This boilerplate repository is also hooked up to Travis ([view build history](http://travis-ci.org/#!/Krinkle/travis-ci-node-and-browser-qunit/builds)).

Just get into it, have a look at it all, you'll get the hang of it, it's easy!
If you've got any problems, feel free to ask on Twitter or [create an issue](https://github.com/keithamus/travis-ci-node-and-browser-qunit/issues).

* [@keithamus](https://github.com/keithamus) ([Twitter](https://twitter.com/keithamus))
* [@Krinkle](https://github.com/Krinkle) ([Twitter](https://twitter.com/TimoTijhof))

By default Travis-CI will execute the `npm test` command, which in this example
repository runs `node test/node-index.js`. In addition to running it in node (which
does not simulate a browser), it will also run in phantomjs (from the
`before_script` hook in `.travis.yml`) which is a headless WebKit browser.

Depending on the kind of project you have you may want to keep only one of these.
For example, if your application uses HTML elements and such then you'll want
to only keep the phantomjs test (and thus remove the `test/node-test.js` file
and the `scripts.test` property in `package.json`). Likewise, if your app is
written specifically for NodeJS (e.g. uses `require('fs')` and what not), then
you'll want to delete `test/phantomjs-index.js` and remove these 3 lines from
the `before_script` hook in the `.travis.yml` file:
```
  - "export DISPLAY=:99.0"
  - "sh -e /etc/init.d/xvfb start"
  - "phantomjs test/phantomjs-index.js"
```
