const HtmlWebpack = require('html-webpack-plugin');
const MiniCssExtract = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    clean: true
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node-modules/,
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          sources: false
        }
      },
      {
        test: /\.css$/,
        exclude: /styles.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /styles.css$/,
        use: [MiniCssExtract.loader, 'css-loader']
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpack({
      template: './src/index.html'
    }),
    new MiniCssExtract({
      filename: '[name].css',
      ignoreOrder: false
    }),
    new CopyPlugin({
      patterns: [{ from: 'src/assets/', to: 'assets/' }]
    })
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist')
    }
  }
}