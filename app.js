const HTTP = require('http')
const fs = require('fs')
let datas;
const server = HTTP.createServer((req, res) => {

  switch (req.url) {
    case '/':
      fs.readFile("./Index.html", "utf8", (err, data) => {
        datas = data
        res.end(datas)
      })
      break;
    case '/about':
      fs.readFile("./about.html", "utf8", (err, data) => {
        datas = data
        res.end(datas)
      })
      break;

    case '/contact':
      fs.readFile("./contact.html", "utf8", (err, data) => {
        datas = data
        res.end(datas)
      })
      break;
    default:
      fs.readFile("./404.html", "utf8", (err, data) => {
        datas = data
        res.end(datas)
      })
      break;
  }
})
server.listen(8080)