/** @type {import('jest').Config} */
const config = {
  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,

  // Automatically reset mock state before every test
  resetMocks: true,

  // Reset the module registry before running each individual test
  resetModules: true,

  // Automatically restore mock state and implementation before every test
  restoreMocks: true,

  // The directory where Jest should store its cached dependency information
  cacheDirectory: "<rootDir>/.jest/cache",

  // Make calling deprecated APIs throw helpful error messages
  errorOnDeprecated: true,

  // The test environment that will be used for testing
  testEnvironment: "jsdom",

  // Run tests from one or more projects
  // projects: undefined,

  // The paths to modules that run some code to configure or set up the testing environment before each test
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],

  // The glob patterns Jest uses to detect test files
  testMatch: ["**/?(*.)+(spec|test).[jt]s?(x)"],

  // An array of regexp pattern strings, matched against all test paths, matched tests are skipped
  testPathIgnorePatterns: ["/node_modules/"],

  // An array of regexp pattern strings that are matched against all module paths before considered 'visible' to the module loader
  modulePathIgnorePatterns: [],

  // Indicates whether each individual test should be reported during the run
  verbose: false,

  // An array of regexp patterns that are matched against all source file paths before re-running tests in watch mode
  watchPathIgnorePatterns: [],

  // Whether to use watchman for file crawling
  watchman: true,

  transform: {
    "^.+\\.(js|jsx|ts|tsx|mjs)$": "babel-jest",
    "^.+\\.(css)$": "<rootDir>/fileTransformer.js",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/fileTransformer.js",
  },
};

module.exports = config;
