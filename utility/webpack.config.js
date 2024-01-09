const Dotenv = require('dotenv-webpack');
const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "app",
    projectName: "utility",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    mode: 'production',
    plugins: [
      new Dotenv(),
    ]
    // modify the webpack config however you'd like t:o by adding to this object
  });
};
