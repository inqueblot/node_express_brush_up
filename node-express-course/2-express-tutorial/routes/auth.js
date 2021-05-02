const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
    console.log(req.body)
    if (req.body.name) {
        return res.status(200).send(`Welcome ${req.body.name}`)
    }
    else {
        res.status(404).send('please provide credentials')
    }

})

module.exports = router