const express = require('express')
const routes = require('./router')

const app = express()

const host = '127.0.0.1'
const port = 7000

app.use('/api', routes)

app.listen(port, host, () => {
    console.log('Server listen on', port)
})
