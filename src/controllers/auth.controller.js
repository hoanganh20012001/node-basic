const jwt = require('jsonwebtoken')
const User = require('../models/users.model')
const jwxtConfig = require('../config/jwt')

module.exports = {
  async signin(req, res) {
    const user = await User.findOne({
      email: req.body.email,
      password: req.body.password
    })
    if (user) {
      const token = jwt.sign({ sub: user.id }, jwxtConfig.secret, { 
        expiresIn: jwxtConfig.expiresIn 
      })
      res.json({ 
        data: { token }
      })
    } else {
      res.status(401).json({
        code: '401',
        message: 'Unauthorized'
      })
    }
  },
  currentUser(req, res) {
    res.json({
      data: req.user
    })
  }
}