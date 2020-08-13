const webpackMerge = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");
const path = require('path');

module.exports = (webpackConfigEnv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "react-reports",
    projectName: "reports-app",
    webpackConfigEnv,
  });

  return webpackMerge.smart(defaultConfig, {
    output: {
      filename: 'main.js',
      libraryTarget: "system",
      path: path.resolve(process.cwd(), "dist")
    }
    // modify the webpack config however you'd like to by adding to this object
  });
};
