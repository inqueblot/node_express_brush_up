const { createReadStream, ReadStream } = require('fs');

const stream = createReadStream('./content/big.txt',
    {
        highWaterMark: 8000,
        encoding: 'utf8'
    })

stream.on('data', (result) => {
    console.log(result.length);
})
stream.on('error', (err) => {
    console.log(err)
})