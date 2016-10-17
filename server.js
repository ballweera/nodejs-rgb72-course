'use strict'

const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.json({ message: 'Hello from NodeJS API' })
})


const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Start server at http://localhost:${port}`)
})
