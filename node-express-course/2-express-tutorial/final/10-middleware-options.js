const express = require('express')
const logger = require('./logger')
const authorize = require('./authorize')
const morgan = require('morgan')
const app = express();
// req => middleware => res
app.use(morgan('tiny'))
// app.use('/api', [logger, authorize])
app.use(express.static('./public'))

app.get('/', (req, res) => {
  res.send("Home")
})

app.get('/about', (req, res) => {
  res.send('About')
})

app.get('/api/products', (req, res) => {
  res.send('Products')
})

app.get('/api/items', (req, res) => {
  res.send('Items')
})

app.listen(5000, () => {
  console.log('app is listening on port 5000...');
})
