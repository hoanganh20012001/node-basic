const jwt = require('jsonwebtoken')
const jwtConfig = require('../config/jwt')
const User = require('../models/users.model')

function authRequired(req, res, next) {
  const authHeader = req.headers['authorization']
  console.log(authHeader);
  const token = authHeader && authHeader.split(' ')[1]

  if (!token) {
    return res.status(401).json({
      code: 401,
      message: 'Unauthorized'
    })
  } 
  
  jwt.verify(token, jwtConfig.secret, async (err, payload) => {

    if (err) {
      return res.sendStatus(403).json({
        code: 403,
        messgage: 'Forbidden',
      })
    }
    const userId = payload.sub
    const user = await User.findById(userId)
    req.user = user

    next()
  })
}

module.exports = authRequired