const http = require('http')
const host = process.env.HOST
const port = process.env.PORT

const server = http.createServer((req, res) => {
    if (!req.url == '/hello') return
    const method = req.method
    const text = {
        GET: '',
        POST: ' created',
        PUT: ' updated',
        DELETE: ' deleted'
    }
    const resText = text[method] || ''
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write(`world${resText}`)
    res.end()
})


server.listen(port)
console.log(`Listening at port ${port} on ${host}...`)
