const postsRouter = require('./posts.router')
const usersRouter = require('./users.router')
const authRouter = require('./auth.router')

function routes(app) {
  
  app.use('/api/posts', postsRouter)
  app.use('/api/users', usersRouter)
  app.use('/api/auth', authRouter)
}

module.exports = routes