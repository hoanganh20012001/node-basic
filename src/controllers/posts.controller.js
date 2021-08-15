module.exports = {
  // GET all posts
  index(req, res) {
    res.json([
      'Get all posts'
    ])
  },
  // Create a post
  store(req, res) {
    res.json([
      'Create post'
    ])
  },
  // GET  a post by ID
  show(req, res) {
    res.json([
      'A post'
    ])
  },
  // Update a post 
  update(req, res) {
    res.json([
      'Update post'
    ])
  },
  // Delete a post by ID
  destroy(req, res) {
    res.json([
      'Delete post'
    ])
  }
}