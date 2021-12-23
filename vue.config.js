const path = require("path");
const vueSrc = "./src";
module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule("graphql")
      .test(/\.(graphql|gql)$/)
      .use("graphql-tag/loader")
      .loader("graphql-tag/loader")
      .end();
  },
  configureWebpack: {
    // devtool: "source-map",
    // productionSourceMap: true,
    // devServer: {
    //   host: "localhost",
    // },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, vueSrc),
      },
      extensions: [".js", ".vue", ".json"],
    },
  },
};
