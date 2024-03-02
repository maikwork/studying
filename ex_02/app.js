const express = require('express')
const app = express()

const host = '127.0.0.1'
const port = 7000

app.get('static', (req, res) => {
})

app.use('/style.css', express.static(`${__dirname}/style.css`))
app.use('/static', express.static(`${__dirname}/index.html`))

app.listen(port, host, () => {
    console.log('Server run on', port)
})