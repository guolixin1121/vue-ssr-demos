const server = require('express')()
const { createBundleRenderer } = require('vue-server-renderer')
const renderer = createBundleRenderer(require('./dist/vue-ssr-server-bundle.json'), {
  runInNewContext: false,
  template: require('fs').readFileSync(__dirname + '/index.html', 'utf-8')
})

server.get('*', (req, res) => {
    const context = { url: req.url }
    renderer.renderToString(context, (err, html) => {
        if(err) {
            res.status(500).end(err)
            return
        }
        res.send(html)
    })
})

server.listen(3000, () => console.log('Example app listening on port 3000!'))
