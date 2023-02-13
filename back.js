const express = require('express')
const db= require("./data/db.json")
var serveStatic = require('serve-static')
//const hem=require("index.html")

const app = express()
const port = 3000

app.use(serveStatic('files', { index: ['default.html'], db:['db.json'] }))

app.get('/front', (req, res) => {

    console.log(req)
    console.log(res)
  res.send('bibbi')
})
app.get('/db', (req, res) => {
    
    console.log(req)
  res.sendFile(db)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})