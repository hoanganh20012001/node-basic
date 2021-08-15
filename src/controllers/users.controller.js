const User = require('../models/users.model')

module.exports = {
  // GET all users
  async index(req, res) {
    try {
      const users = await User.find({})
      res.json({ data: users })
    } catch (error) {
      console.log(error)
    }
  },
  // Create a user
  async store(req, res) {
    try {
      const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      })
      const newUser = await user.save()
      res.status(201).json({ data: newUser })
      
    } catch (error) {
      console.log(error)
    }
  },
  // GET an user by ID
   async show(req, res) {
    try {
      const user = await User.findById(req.params.id).exec()
      if (!user) {
        return res.status(404).json({ data: {
          code: 404,
          message: 'Not found'
        }})
      }
      res.json({ data: user })
    
    } catch (error) {
      console.log(error)
    }
  },
  // Update a user 
  async update(req, res) {
    await User.findOneAndUpdate({
      _id: req.params.id,
    }, {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    })
    const user = await User.findById(req.params.id).exec()
    res.json({ data: user })
  },
  // Delete a user by ID
  async destroy(req, res) {
    const user = await User.findByIdAndDelete(req.params.id)
    if (!user) {
      res.status(404).json({ data: {
        code: 404,
        message: 'Not found'
      }})
    }

    res.status(200).json({ data: { message: "Successfull !" }})
  }
}