const server = require('express')()
const renderer = require('vue-server-renderer').createRenderer({
})
const createApp = require('./dist/bundle.server.js')['default']
console.log(createApp)
server.get('*', (req, res) => {
    const app = createApp()

    renderer.renderToString(app, (err, html) => {
        if (err) {
            res.status(500).end(err)
            return
        }

        res.end(html)
    })
})


// 服务器监听地址
server.listen(3000, () => {
    console.log('SSR服务器已启动: 3000')
})