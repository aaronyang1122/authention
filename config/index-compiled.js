'use strict';

var path = require('path');

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist/static/'),
    assetsSubDirectory: '',
    assetsPublicPath: 'static/',
    productionSourceMap: false,

    productionGzip: false,
    productionGzipExtensions: ['js', 'css']
  },
  dev: {
    env: require('./dev.env'),
    port: 8080,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},

    cssSourceMap: false
  }
};

//# sourceMappingURL=index-compiled.js.map