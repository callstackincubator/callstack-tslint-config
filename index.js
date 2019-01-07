module.exports = {
  extends: [
    'tslint-microsoft-contrib',
    'tslint-config-prettier',
    'tslint-react'
  ],
  rulesDirectory: [
    'tslint-plugin-prettier',
  ],
  rules: {
    // Base overrides
    prettier: [true, { singleQuote: true, trailingComma: 'es5' }],
    'array-type': [true, 'array-simple'],
    'typedef': [
      true,
      'parameter',
      'arrow-parameter',
      'property-declaration',
      'member-variable-declaration'
    ],

    // MS contrib overrides
    'arrow-return-shorthand': true,
    'export-name': false,
    'function-name': [true, {
      'static-method-regex': '^[A-Za-z][\\w\\d]+$',
      'function-regex': '^[A-Za-z][\\w\\d]+$'
    }],
    'import-name': false,
    'max-func-body-length': false,
    'member-access': [true, 'no-public'],
    'no-default-export': false,
    'no-relative-imports': false,
    'promise-function-async': false,
    'strict-boolean-expressions': false,
    'match-default-export-name': false, 
    'ordered-imports': false,
    'object-literal-sort-keys': false,
    'completed-docs': false,
    'newline-before-return': false,
    'variable-name': [true, 'ban-keywords', 'allow-pascal-case'],
    'prefer-type-cast': false,
    'prefer-method-signature': false,
    'no-use-before-declare': false,
    'mocha-no-side-effect-code': false,
    'no-backbone-get-set-outside-model': false,
    'prefer-array-literal': false,

    // React overrides
    'jsx-boolean-value': [true, 'never'],
    'jsx-no-multiline-js': false,
    'use-simple-attributes': false,
  }
}
