const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV;

module.exports = {
  entry: path.resolve(__dirname, '../src/index.ts'),

  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'bundle.min.js',
    publicPath: '/',
  },

  devServer: {
    historyApiFallback: true,
    publicPath: '/',
  },

  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        use: ['cache-loader', 'babel-loader', 'ts-loader'],
      },
      {
        test: /\.css$/,
        use: ['cache-loader', 'style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif|eof|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              esModule: false,
            },
          },
        ],
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    plugins: [new TsconfigPathsPlugin()],
    alias: {
      react: path.resolve('node_modules/react'),
    },
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html'),
    }),
  ],

  externals: {
    config: JSON.stringify({
      environment: NODE_ENV,
      apiUrl: NODE_ENV === 'production' ? 'https://prod.dummy-svr.com' : 'https://dev.dummy-svr.com',
      metricsEndpoint: '/metrics'
    })
  }
}
