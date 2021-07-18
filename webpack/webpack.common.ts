import * as path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import * as webpack from "webpack";

require("dotenv").config();

const config: webpack.Configuration = {
  entry: "./src/index.tsx",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".css", ".scss"],
    modules: [path.resolve(__dirname, "../src"), "../node_modules"]
  },
  output: {
    path: path.join(__dirname, "../dist"),
    filename: "index_bundle.js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: [
          { loader: "style-loader" },
          { loader: "css-modules-typescript-loader" },
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "prefix-[local]",
                exportLocalsConvention: "camelCase"
              }
            }
          },
          { loader: "sass-loader" }
        ]
      },
      {
        // Preprocess 3rd party .css files located in node_modules
        test: /\.css$/,
        include: /node_modules/,
        use: ["style-loader", "css-modules-typescript-loader", "css-loader"]
      },
      {
        test: /\.(png|jpe?g|gif|svg|pdf|ico)$/,
        use: [
          {
            loader: "file-loader",

            options: {
              modules: true,
              name: "assets/images/[name].[ext]"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new webpack.DefinePlugin({
      BASE_URL: JSON.stringify(process.env.BASE_URL)
    })
  ]
};

export default config;
