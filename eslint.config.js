import globals from 'globals';
import pluginJs from '@eslint/js';
import eslintPluginCheckFile from 'eslint-plugin-check-file';

export default [
  pluginJs.configs.recommended,
  {
    ignores: [
      '.env',
      '.env.*',
      'build',
      'coverage',
      'duplicate',
      'package-lock.json',
      'src/**/*.spec.js',
      'scripts/**/*.js',
      'tests/**/*.fixture.js'
    ]
  },
  {
    rules: {
      complexity: ['error', { max: 8 }],
      'max-lines-per-function': ['error', { max: 50, skipBlankLines: true, skipComments: true }],
      'max-lines': ['error', { max: 300, skipBlankLines: true, skipComments: true }],
      'object-curly-spacing': 'off'
    }
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    }
  },
  {
    plugins: {
      'check-file': eslintPluginCheckFile
    },
    rules: {
      'check-file/filename-naming-convention': [
        'error',
        {
          'src/lib/*.{js,ts,json}': 'KEBAB_CASE',
          'src/routes/*': '+([a-z\\+])*([a-z0-9])*(-+([a-z0-9]))'
        },
        {
          ignoreMiddleExtensions: true
        }
      ]
    }
  }
];
