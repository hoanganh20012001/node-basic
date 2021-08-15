const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const routes = require('./src/routes')

const dbConnect = require('./src/lib/mongodb')

const app = express()
const port = 3000

// connect to DB
dbConnect()

app.use(morgan('combined'))
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

// routes
routes(app)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})