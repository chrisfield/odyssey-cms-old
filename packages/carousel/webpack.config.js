const path = require('path');
module.exports = {
  output: {
    path: path.join(__dirname, './lib'),
    filename: 'index.js',
    globalObject: 'this',
    library: '@odyssey-cms/carousel',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  externals: {
    // Don't bundle these
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "React",
      root: "React"
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "ReactDom",
      root: "ReactDom"
    },
    "next": {
      commonjs: "next",
      commonjs2: "next",
      amd: "next",
      root: "next"
    }
  }
};