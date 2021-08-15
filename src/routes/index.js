const postsRouter = require('./posts.router')

function routes(app) {
  
  app.use('/api/posts', postsRouter)
}

module.exports = routes