
module.exports = {
  entry: './src/app.js',
  output: {
    path: __dirname + '/dist',
    filename: 'app.bundle.js'
  },
  mode: 'development',
  devtool: 'sourcemap',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ["@babel/plugin-proposal-class-properties"]
          }
        }
      },
      {
        test: /\.(txt|css)$/i,
        use: [
          {
            loader: 'raw-loader',
            options: {
              esModule: false,
            },
          }
        ]
      }
    ]
  },
  optimization: {
    minimize: true
  },
  devServer: {
    contentBase: __dirname,
    compress: true,
    port: 9000
  }
};