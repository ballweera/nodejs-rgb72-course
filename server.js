'use strict'

const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/todo/list', (req, res) => {
  res.json([
    { id: 1, title: 'Learn NodeJS', completed: false },
    { id: 2, title: 'Read a article', completed: true }
  ])
})

app.get('/', (req, res) => {
  res.json({ message: 'Hello from NodeJS API' })
})


const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Start server at http://localhost:${port}`)
})
