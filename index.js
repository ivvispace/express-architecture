const express = require('express')
const mongoose = require('mongoose')

mongoose.Promise = global.Promise
let app = express()

app.get('/', (req, res) => {
  console.log('express ready')
  mongoose
    .connect('mongodb://localhost:27017/blogsystem', {
      useMongoClient: true
    })
    .then(() => {
      console.log('mongo ready')
      res.send('ок')
    })
})
app.listen(1337)
