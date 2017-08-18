const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')
const glob = require('glob')
const parts = require('./webpack.parts')
const webpack = require('webpack')

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
}

const commonConfig = merge([
  {
    entry: {
      app: ['babel-polyfill', PATHS.app]
    },
    output: {
      path: PATHS.build,
      filename: '[name].js'
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Webpack demo'
      })
    ]
  },

  parts.loadJavaScript({ include: PATHS.app }),

  parts.lintJavaScript({ include: PATHS.app }),

  // parts.loadCSS()

  parts.loadFonts({
    options: {
      name: '[name].[ext]'
    }
  })
])

const productionConfig = merge([
  {
    entry: {
      vendor: ['react']
    },

    plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor'
      })
    ]
  },
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
