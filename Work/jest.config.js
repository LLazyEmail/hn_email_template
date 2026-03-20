module.exports = {
  testEnvironment: 'node',
  // Map path aliases so imports like "@root/..." resolve to src/
  moduleNameMapper: {
    '@root(.*)$': '<rootDir>/src/$1',
  },
  testMatch: ['**/tests/**/*.test.js'],
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
};
