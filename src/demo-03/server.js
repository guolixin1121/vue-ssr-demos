const server = require('express')()
const path = require('path')
const templateFile = __dirname + '/index.html'
const renderer = require('vue-server-renderer').createRenderer({
    template: require('fs').readFileSync(templateFile,'utf-8')
})
const createApp = require('./app')

server.get('*', (req, res) => {
    const context = { url: req.url }
    const app = createApp(context)

    renderer.renderToString(app, (err, html) => {
        if(err) {
            res.status(500).end(err)
            return
        }
        res.end(html)
    })
})

server.listen(3000, () => console.log('Example app listening on port 3000!'))
