module.exports = {
  root: true,

  extends: [
    "plugin:vue/recommended",
    "plugin:prettier/recommended",
    "eslint:recommended"
  ],

  parserOptions: {
    parser: "babel-eslint",
    sourceType: "module"
  },

  env: {
    browser: true,
    node: true
  },

  globals: {
    __Static: true
  },
  plugins: ["vue"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
  }
};
