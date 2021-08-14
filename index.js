const express = require('express')
const morgan = require('morgan')

const app = express()
const port = 3000

app.use(morgan('combined'))

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

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})