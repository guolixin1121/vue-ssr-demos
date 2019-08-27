const Vue = require('vue')
const server = require('express')()
const renderer = require('vue-server-renderer').createRenderer()

server.get('*', (req, res) => {
    
    const app = new Vue({
        template: '<div>Hello World</div>'
    }) 

    renderer.renderToString(app, (err, html) => {
        if(err) {
            res.status(500).end('Internal Server Error')
            return
        }
        res.end(`
            <!DOCTYPE html>
            <html lang="en">
            <head><title>Hello</title></head>
            <body>${html}</body>
            </html>
        `)
    })
})

server.listen(3000, () => console.log('Example app listening on port 3000!'))
