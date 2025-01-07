import { createServer } from 'http'
import { parse } from 'url'
import next from 'next'

const dev = process.env.NODE_ENV !== 'production'
const hostname = 'sinergia-telecomunicaciones.com.mx'
const port = process.env.PORT || 3000
const app = next({ 
    dev, 
    hostname,
    port,
    conf: {
        compress: true,
        poweredByHeader: false,
    }
})
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      if (req.headers['x-forwarded-proto'] === 'http') {
        res.writeHead(301, {
          Location: `https://sinergia-telecomunicaciones.com.mx${req.url}`
        })
        res.end()
        return
      }

      const parsedUrl = parse(req.url, true)
      await handle(req, res, parsedUrl)
    } catch (err) {
      console.error('Error occurred handling', req.url, err)
      res.statusCode = 500
      res.end('internal server error')
    }
  }).listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on https://${hostname}:${port}`)
  })
}) 