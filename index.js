require('dotenv').config()

const express = require('express')
const app = express()
app.use(express.json())

// Controllers and Routes

app.get('/', (req, res) => {
  res.send('home')
})

app.use('/books', require('./controllers/controller'))

app.get('*', (req, res) => {
  res.send('error404')
})

// Listen for Connections
app.listen(process.env.PORT, () => {
  console.log("Listening on port ", process.env.PORT)
})