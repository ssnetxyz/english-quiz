    module.exports = {
      "settings": {
        "import/resolver": "webpack"
      },
      parserOptions: {
        parser: "babel-eslint"
      },
      extends: [
        // add more generic rulesets here, such as:
        "eslint:recommended",
        "plugin:vue/recommended"
      ],
      "env": {
        "browser": true,
        "node": true
      },
      rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
    "vue/max-attributes-per-line": [
      2,
      {
        singleline: 4,
        multiline: { max: 1, allowFirstLine: false }
      }
    ],
    "vue/html-indent": 2,
    "vue/html-self-closing": false,
    "vue/html-closing-bracket-newline": [
      "error",
      {
        singleline: "never",
        multiline: "never"
      }
    ],
    "no-irregular-whitespace": 0,
    "no-console": 0,
    quotes: ["error", "single"]
  }
};
