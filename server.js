'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

let todos = [
  { id: 1, title: 'Learn NodeJS', completed: false },
  { id: 2, title: 'Read a article', completed: true }
]

app.get('/todo/list', (req, res) => {
  res.json(todos)
})

app.post('/todo/create', (req, res) => {
  let todo = req.body

  todo.id = 3
  todos.push(todo)
  res.json(todo)
})

app.get('/', (req, res) => {
  res.json({ message: 'Hello from NodeJS API' })
})

const port = process.env.PORT || 9090
app.listen(port, () => {
  console.log(`Start server at http://localhost:${port}`)
})
