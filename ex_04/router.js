const express = require('express')

const router = express.Router()

router.route('/user')
    .get((req, res) => {
        res.status(200).type('text/plain')
        res.send('Hello kitty')
    })
    .post((req, res) => {
        res.status(200).type('text/plain')
        res.send('post kitty')
    })

router.route('/mem')
    .get((req, res) => {
        res.status(200).type('text/plain')
        res.send('Я родился')
    })
    .delete((req, res) => {
        res.status(200).type('text/plain')
        res.send('Они убили кенни')
    })

module.exports = router
    