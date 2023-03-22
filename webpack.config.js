const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    entry: path.resolve(__dirname, "./public/js/global.js"),
  },
  output: {
    path: path.resolve(__dirname, "./public/dist/"),
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
