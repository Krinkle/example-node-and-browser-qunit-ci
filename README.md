# Travis CI with Node JS and Browser (in Phantom JS), using QUnit

This project is a little demonstration of how to get a javascript library using
continuous integration by running QUnit tests inside a fake browser (phantomjs) 
and also inside nodejs.

Frontend developers seem to have very little exposure to TDD and CI, this is an 
attempt to fix that.

# What is TDD and CI, why should I do these?

The typical process when you write some code for a client or project, is to 
write the code, then test to make sure it works, then you push it to your VCS 
(like git), and when that is done you can package it all up and upload it to 
where it needs to go (as in, live on the server). So it looks a little like:

    coding -> testing -> pushing -> packaging -> deploying

Thing is, you can automate pretty much all of these steps, with TDD and CI.


### TDD - Test Driven Development

Normally, when you write some code, lets say a javascript library, you'll write 
some code, lets say:

```javascript
function doubleNumber(a) {
    return a * 2;
}
```

When you've finished writing your function, you need to make sure it works, 
right? So you load up your file in your browser, and run the function, 
`doubleNumber(3)` and it comes back `6`. Great! But that is a load of effort to 
check this function works every time you update your code right? You should 
automate this!

```javascript
test('doubleNumber() returns twice the value of the first argument', function ()) {
   
    equal(doubleNumber(1), 2);
    equal(doubleNumber(2), 4);
    equal(doubleNumber(3), 6);
    equal(doubleNumber(4), 8);

});
```

Above is a working example of a QUnit test that will test your doubleNumber 
function to make sure it is working. You can then run this code in your browser, 
and it'll tell you if it passes or fails. Awesome!

Proper TDD means you write the tests first, this way you can see them fail (so 
you can test your tests), then make them pass. It makes development a lot easier 
because it breaks it down, and makes you think about the way you're writing code.
TDD is awesome because:

 - It gives you boundaries to work to, making your flow better
 - It is a great way to "prove" your code works. Your code will be more stable for it.
 - It can be a great way to organise yourself, tests become "todos"
 - You are probably manually testing right now, so get your computer to do it all for you!

### CI - Continuous Integration

Problem now is, it's frigging boring to load up this test page all the time, and 
watch it pass. Sometimes you forget and you deploy code which has broken tests. 
Well, this is where Continuous Integration steps in.

CI is the middle man between when you run `git push` and when your website is 
deployed. A well-setup CI system will hook into your VCS (like git) and when it 
notices you've updated, it'll run all of the tests for you, and when (and only 
when) those tests pass, it'll deploy your project for you. This means that the 
process we described earlier:

    coding -> testing -> pushing -> packaging -> deploying

is now:

    coding -> pushing

Your CI system has taken care of the rest for you.

# Where can I get my hands on this CI system then?

There is an awesome project called [Travis CI](http://travis-ci.org/) which is 
a cloud-based CI, for open source projects. It is built for github so you can 
make a project in github, and hook it up to travis ci and every time you push, 
travis ci will run your tests for you. 

This project is for that. The .travis.yml is set up so that the tests in 
test/index.html will be loaded up and run in a webkit-based browser, and also it
will run the same code and tests in NodeJS. This repository is hooked up to 
travis, and you can see it (failing) [here](http://travis-ci.org/#!/keithamus/travis-ci-node-and-browser-qunit/builds).

The build is currently failing because it has a test which fails inside 
mylib.test.js, for illustration purposes. [Build #14](http://travis-ci.org/#!/keithamus/travis-ci-node-and-browser-qunit/builds/659066)
did pass, because it didn't have these failing tests.

Just get stuck in, have a look at it all, you'll get the hang of it, it's easy! 
If you've got any problems, tweet me [@keithamus](http://twitter.com/keithamus) 