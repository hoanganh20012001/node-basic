const express = require('express')
const morgan = require('morgan')
const routes = require('./src/routes')
const cors = require('cors')

const app = express()
const port = 3000

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