import { WebpackOptionsNormalized, Configuration } from "webpack";
import commonConfig from "./webpack.common";
import { merge } from "webpack-merge";

const config = merge<WebpackOptionsNormalized | Configuration>(commonConfig, {
  mode: "development",
  devServer: {
    open: true,
    historyApiFallback: true,
    port: 3000
  }
});

export default config;
