const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const fs = require("node:fs");
const basenames = JSON.parse(
  fs.readFileSync("./templateconfig.json")
).basenames;

const entries = {};
const htmlPlugins = [];

basenames.forEach((name) => {
  entries[name] = `./src/chunks/${name}.tsx`;
  htmlPlugins.push(
    new HtmlWebpackPlugin({
      template: `./src/html/${name}.html`,
      filename: name + ".html",
      chunks: [name],
    })
  );
});

module.exports = {
  entry: entries,
  output: {
    publicPath: "",
    path: path.resolve(__dirname, "public"),
    filename: "[name].[contenthash].js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx"],
  },
  optimization: {
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
    ...htmlPlugins,
  ],
};
