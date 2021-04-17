const logger = (req, res, next) => {
    // const method = req.method
    // const url = req.url
    const { method, url } = req
    const time = new Date().getFullYear()
    console.log(method, url, time);
    next()
}

module.exports = logger