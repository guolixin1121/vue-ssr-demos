
const path = require('path');
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config.js')
 
module.exports = merge(baseConfig, {
    target: 'node', // 此处告知 server bundle 使用 Node 风格导出模块(Node-style exports)
    entry: path.resolve(__dirname,'../entry-server.js'),
    output: {
        libraryTarget: 'commonjs2',
        filename: 'bundle.server.js'
    },
})