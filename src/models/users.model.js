const mongoose = require('mongoose')
const Schema = mongoose.Schema
// const ObjectId = Schema.ObjectId

const UserSchema = new Schema({
  name: {
    type: String,
    trim: true,
    minLength: 2,
    maxLength: 128,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    required: true
  },
  password: {
    type: Number,
    minLength: 6,
    maxLength: 16,
    required: true,
  },
}, { 
  timestamps: true
},)

const UserModal = mongoose.model('User', UserSchema)

module.exports = UserModal