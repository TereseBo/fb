const express = require('express')
const db= require("./data/db.json")
var serveStatic = require('serve-static')
//const hem=require("index.html")

const app = express()
const port = 3000
app.use(serveStatic('files', { index: ['default.html'] }))
app.get('/front', (req, res) => {
    
    console.log(req)
  res.send('hello w')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})