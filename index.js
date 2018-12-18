module.exports = {
  extends: [
    'tslint-microsoft-contrib',
    'tslint-config-prettier'
  ],
  rulesDirectory: [
    'tslint-plugin-prettier',
    'tslint-eslint-rules'
  ],
  rules: {
    'prettier': [true, { 'singleQuote': true }],
    'function-name': [true, {
      'static-method-regex': '^[a-z][\\w\\d]+$'
    }],
    'no-unsafe-any': { severity: 'warning' },
    'no-default-export': false,
    'no-relative-imports': false,
    'export-name': false,
    'promise-function-async': false,
    'strict-boolean-expressions': false,
    'match-default-export-name': false, 
    'ordered-imports': false,
    'object-literal-sort-keys': false,
    'completed-docs': false,
    'prefer-type-cast': false,
    'typedef': [
      true,
      'parameter',
      'arrow-parameter',
      'property-declaration',
      'member-variable-declaration'
    ]
  }
}
