module.exports = {
  parser: "babel-eslint",
  env: {
    browser: true,
    es6: true,
  },
  extends: ["plugin:react/recommended", "prettier", "airbnb"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/prop-types": 0,
    "react/prefer-stateless-function": 0,
    "react/no-array-index-key": 0,
    "no-console": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "react/destructuring-assignment": 0,
    "react/jsx-one-expression-per-line": 0,
    indent: "off",
    "jsx-a11y/label-has-for": 0,
    quotes: [1, "single"],
  },
  settings: {
    polyfills: ["fetch", "promises", "url"],
    "import/resolver": {
      alias: {
        map: [["@", "./src/"]],
      },
    },
  },
};
