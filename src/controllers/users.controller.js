module.exports = {
  // GET all users
  index(req, res) {
    res.json([
      'Get all users'
    ])
  },
  // Create a user
  store(req, res) {
    res.json([
      'Create user'
    ])
  },
  // GET  a user by ID
  show(req, res) {
    res.json([
      'A user'
    ])
  },
  // Update a user 
  update(req, res) {
    res.json([
      'Update user'
    ])
  },
  // Delete a user by ID
  destroy(req, res) {
    res.json([
      'Delete user'
    ])
  }
}