const server = require('express')()

server.get('*', (req, res) => {
    res.end('hi')
})

server.listen(3000, () => {
    console.log('server is running on port 3000...')
})