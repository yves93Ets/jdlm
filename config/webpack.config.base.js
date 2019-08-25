var path = require("path");

module.exports = {
  entry: { app: "./src/index.tsx" },
  output: {
    filename: "app.js",
    path: path.resolve(__dirname + "/dist/")
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: "ts-loader",
          options: {
            transpileOnly: true
          }
        }
      },
      {
        test: /\.js$/,
        use: ["source-map-loader"],
        enforce: "pre"
      }
    ]
  },
  target: "web",
  resolve: {
    alias: {
      Models: path.resolve(__dirname, "../src/common/models/"),
      Components: path.resolve(__dirname, "../src/components/"),
      Common: path.resolve(__dirname, "../src/common/")
    },
    extensions: [".ts", ".tsx", ".js"]
  }
};
