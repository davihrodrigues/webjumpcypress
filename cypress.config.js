const { defineConfig } = require("cypress");

module.exports = defineConfig({
  retries: 0,
  defaultCommandTimeout: 10000,
  viewportWidth: 1800,
  viewportHeight: 1000,
  video: false,
  screenshotOnRunFailure: false,

  e2e: {
    baseUrl: 'https://wj-qa-automation-test.github.io/qa-test/'
  },
});
