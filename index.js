const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')
require('dotenv').config()

app.use(cors())
app.use(express.json())

app.use(express.static(path.join(__dirname, './client/build')))
app.get('/', function (request, response) {
  response.sendFile(path.resolve(__dirname, './client', 'build', 'index.html'))
})

app.listen(process.env.PORT)
