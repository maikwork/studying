const express = require('express')
const app = express()

const host = '127.0.0.1'
const port = 8000

app.get('/user', (req, res) => {
    res.status(200).type('text/plain')
    res.send('get user')
})

app.post('/user', (req, res) => {
    res.status(200).type('text/plain')
    res.send('post user')
})

app.delete('/user', (req, res) => {
    res.status(200).type('text/plain')
    res.send('delete user')
})

app.put('/user', (req, res) => {
    res.status(200).type('text/plain')
    res.send('put user')
})

app.listen(host, port, () => {
    console.log('Server listen on', port)
})