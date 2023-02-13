const express = require('express')
const db= require("./data/db.json")

const app = express()
const port = 3000

app.get('/', (req, res) => {
    console.log(req)
  res.send(db)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})