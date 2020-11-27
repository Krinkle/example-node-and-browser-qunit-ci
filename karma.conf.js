/* eslint-env node */

module.exports = function (config) {
  config.set({
    browsers: ['FirefoxHeadless'],
    frameworks: ['qunit'],
    files: [
      'src/MyLib.js',
      'test/*.test.js'
    ],
    autoWatch: false,
    singleRun: true,
    preprocessors: {
      'src/*.js': ['coverage']
    },
    reporters: ['dots', 'coverage'],
    coverageReporter: {
      reporters: [
        { type: 'lcov', dir: '.nyc_output/' },
        // Karma uses subdirs by default to account for multiple browsers.
        // For the JSON file, it's important we disable 'subdir' so that
        // the 'nyc report' command can pick this up when combining code
        // coverage with the Node.js test run.
        { type: 'json', dir: '.nyc_output/', subdir: '.' }
      ]
    }
  });
};
