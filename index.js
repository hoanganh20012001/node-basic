const express = require('express')
const morgan = require('morgan')
const multer = require('multer')

const app = express()
const port = 3000
const upload = multer()

app.use(morgan('combined'))
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(upload.array())

app.get('/api/v1/users/:id', (req, res) => {
  // console.log(req.params)
  // console.log(req.query)
  res.json([
    {
      id: 1,
      name: 'John',
    }
  ])
})

app.post('/api/user', (req, res) => {
  console.log(req.body)
  res.json({
    body: req.body,
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})