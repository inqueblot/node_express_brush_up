const express = require('express')
const morgan = require('morgan')
const app = express();

const people = require('./routes/people')
const login = require('./routes/auth')

app.use(morgan('tiny'))
//static assets
app.use(express.static('./methods-public'))
//parse form data
app.use(express.urlencoded({ extended: false }))
//parse json
app.use(express.json())

app.use('/api/people', people)
app.use('/login', login)

app.listen(5000, () => {
    console.log('app is listening on port 5000...');
})
