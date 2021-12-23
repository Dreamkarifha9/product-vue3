module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    //  "plugin:vue/vue3-recommended",
    "plugin:vue/vue3-strongly-recommended",
    "eslint:recommended",
    "prettier",
    "prettier/vue",
  ],
  //extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    sourceType: "module",
    parser: "babel-eslint",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-unused-vars": 0,
    "vue/no-unused-vars": "error",
    "no-useless-escape": 2,
  },
};
