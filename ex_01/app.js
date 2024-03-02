const express = require('express')
const app = express()

const host = '127.0.0.1'
const port = 7000

app.get('/home', (req, res) => {
    res.status(200).type('text/plaine')
    res.send("Home page")
})
app.post('/home', (req, res) => {
    res.status(200).type('text/plain')
    res.send("Create home")
})

app.get('/about', (req, res) => {
    res.status(200).type('text/plain')
    res.send('About page')
})

app.post('/about', (req, res) => {
    res.status(200).type('text/plain')
    res.send('Create about')
})

app.use((req, res, next) => {
    res.status(404).type('text/plain')
    res.send('Page not found')
})

app.listen(port, host, () => {
    console.log('Server run on', port)
})