const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()

// middleware

app.use(express.static('./public'))
app.use(express.json())

app.use('/api/v1/tasks/', tasks)

const server = 3000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(server, console.log(`server listening to port no ${server}`))
  } catch (err) {
    console.log(err)
  }
}

start()
