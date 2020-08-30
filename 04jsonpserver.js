let http = require('http')
const { stringify } = require('querystring')
http
  .createServer((req, res) => {
    let obj = {
      name: 'jack',
      age: 18,
    }
    res.write(`jsonp(${JSON.stringify(obj)})`)
    res.end()
  })
  .listen(9999)
