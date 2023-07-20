const path = require("path");

module.exports = {
  mode: "development",
  entry: "./example/example.js",
  output: {
    path: path.resolve(__dirname, "example"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
