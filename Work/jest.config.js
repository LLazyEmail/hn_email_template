module.exports = {
  testEnvironment: 'node',
  // Map path aliases so imports like "@root/..." resolve to src/
  moduleNameMapper: {
    '@root(.*)$': '<rootDir>/src/$1',
    '^@llazyemail/template-engine$':
      '<rootDir>/../packages/template-engine/src/index.js',
    '^@llazyemail/template-presets-hn$':
      '<rootDir>/../packages/template-presets-hn/src/index.js',
    '^@llazyemail/template-runtime-display$':
      '<rootDir>/../packages/template-runtime-display/src/index.js',
    '^atherdon-newsletter-js-layouts-outertemplate$':
      '<rootDir>/../sub-modules/outerTemplate/src/index.js',
    '^atherdon-newsletter-js-layouts-misc$':
      '<rootDir>/../sub-modules/Miscellaneous/src/index.js',
    '^atherdon-newsletter-js-layouts-body$':
      '<rootDir>/../sub-modules/innerComponents/src/index.js',
    '^atherdon-newsletter-js-layouts-typography$':
      '<rootDir>/../sub-modules/Typography/src/index.js',
  },
  testMatch: ['**/tests/**/*.test.js'],
  transform: {
    '^.+\\.js$': [
      'babel-jest',
      {
        babelrc: false,
        configFile: false,
        plugins: ['@babel/plugin-transform-modules-commonjs'],
      },
    ],
  },
  transformIgnorePatterns: ['/node_modules/(?!(atherdon-newsletter-js-layouts-.*)/)'],
};
