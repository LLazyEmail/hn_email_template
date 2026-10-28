// Minimal ESLint flat config for the current generator (scripts/ only).
// Lives under scripts/ (not repo root) so sub-modules keep using their own .eslintrc
// and are not forced into flat-config mode.
// CommonJS so this works without "type":"module".
module.exports = [
  {
    ignores: ['**/node_modules/**'],
  },
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: 'module',
      globals: {
        console: 'readonly',
        process: 'readonly',
        Buffer: 'readonly',
        URL: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
      },
    },
    rules: {
      'no-unused-vars': ['error', { argsIgnorePattern: '^_', caughtErrorsIgnorePattern: '^_' }],
      'no-undef': 'error',
      'no-redeclare': 'error',
      'no-constant-condition': 'error',
      'no-dupe-keys': 'error',
      'no-duplicate-case': 'error',
      'no-empty': 'warn',
      'no-extra-boolean-cast': 'warn',
      'no-unreachable': 'error',
      'valid-typeof': 'error',
      eqeqeq: ['warn', 'smart'],
      'no-var': 'error',
      'prefer-const': 'warn',
    },
  },
];
