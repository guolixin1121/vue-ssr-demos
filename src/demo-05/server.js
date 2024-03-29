/* server.js */
const exp = require('express')
const express = require('express')()
const renderer = require('vue-server-renderer').createRenderer()
const createApp = require('./dist/bundle.server.js')['default']

// 响应路由请求
express.get('*', (req, res) => {
    const context = { url: req.url }
 
    // 创建vue实例，传入请求路由信息
    createApp(context).then(app => {
        renderer.renderToString(app, (err, html) => {
            if (err) { return res.state(500).end('运行时错误') }
            res.send(`
                <!DOCTYPE html>
                <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <title>Vue2.0 SSR渲染页面</title>
                    </head>
                    <body>
                        <div id="app">
                            ${html}
                        </div>
                    </body>
                </html>
            `)
        })
    }, err => {
        if(err.code === 404) { res.status(404).end('所请求的页面不存在') }
    })
})
 
 
// 服务器监听地址
express.listen(3000, () => {
    console.log('server are running on port 3000...')
})