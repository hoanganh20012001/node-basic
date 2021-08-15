const mongoose = require('mongoose')

const dbconfig = require('../config/db')


async function connectDB() {
  const { host, port, dbname } = dbconfig
  try {
    await mongoose.connect(`mongodb://${host}:${port}/${dbname}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    })
    console.log('connect DB successfully !')
    
  } catch (error) {
    console.log(error)
  }
}

module.exports = connectDB