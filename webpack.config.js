module.exports = {
  entry: './index',
  output: {
    filename: 'browser-bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
    ]
  },
    devServer: {
        host: '0.0.0.0',
        port: 3000,
        inline:true,
        stats: 'errors-only'
    },
    watch: true
};
