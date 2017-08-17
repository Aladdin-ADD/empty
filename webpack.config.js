const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')
const glob = require('glob')
const parts = require('./webpack.parts')

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
}

const commonConfig = merge([
  {
    entry: {
      app: PATHS.app
    },
    output: {
      path: PATHS.build,
      filename: '[name].js'
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Webpack demo'
      })
    ],
    module: {
      rules: [
        {
          // **Conditions**
          // Match files against RegExp or a function.
          test: /\.js$/,

          // **Restrictions**
          // Restrict matching to a directory. This
          // also accepts an array of paths or a function.
          // The same applies to `exclude`.
          include: path.join(__dirname, 'app'),
          exclude (path) {
            // You can perform more complicated checks
            // through functions if you want.
            return path.match(/node_modules/)
          },

          // **Actions**
          // Apply loaders the matched files.
          use: 'babel-loader?cacheDirectory,presets[]=es2015'
        },
        {
          test: /\.(jpg|png|svg)$/,
          loader: 'url-loader',
          options: {
            limit: 25000
          }
        },
        {
          test: /\.(jpg|png|svg)$/,
          loader: 'file-loader',
          options: {
            name: './images/[hash].[ext]'
          }
        }
      ]
    }
  },
  parts.lintJavaScript({ include: PATHS.app }),

  // parts.loadCSS()

  parts.loadFonts({
    options: {
      name: '[name].[ext]'
    }
  })
])

const productionConfig = merge([
  parts.extractCSS({ use: 'css-loader' }),

  parts.purifyCSS({
    paths: glob.sync(`${PATHS.app}/**/*.js`, { nodir: true })
  }),

  parts.loadImages({
    options: {
      limit: 15000,
      name: '[name].[ext]'
    }
  })
])

const developmentConfig = merge([
  parts.devServer({
    // Customize host/port here if needed
    host: process.env.HOST,
    port: process.env.PORT
  }),
  parts.loadCSS(),
  parts.loadImages()
])

module.exports = (env) => merge(commonConfig, env === 'production' ? productionConfig : developmentConfig)
