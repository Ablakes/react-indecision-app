const path = require("path");
// This allows us to join the variable __dirname with public/
//docs: https://nodejs.org/api/path.html#path_path_join_paths

module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.join(__dirname, "public"),
    // this has to be the absolute path to the file on our machine, that's why we need __dirname(absolute path) along with path.join to attach the public/ folder on the end.
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        //run babel-loader on all files that meet the test condition:
        test: /\.js$/,
        // this uses files that end in js - the $ means it comes at the end
        // the . has to be escaped with a \ before it
        exclude: /node_modules/
        // exclude anything in the node_modules folder
      }
    ]
  },
  devtool: "cheap-module-eval-source-map",
  //This will give us a better idea of where our errors in the console are coming from
  //It also shows us where console.logs come from
  devServer: {
    contentBase: path.join(__dirname, "public")
  }
};
