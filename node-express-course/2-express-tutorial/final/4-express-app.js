const express = require('express');
const app = express();
const path = require('path')

const port = 5000

//setup static and middleware
app.use(express.static('./public'))

//not needed if served in public folder
// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
// })

app.all('*', (req, res) => {
  res
    .status(404)
    .send('resource not found')
})


app.listen(port, () => {
  console.log(`server is listening on port: ${port}...`);
})
