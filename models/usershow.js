const mongoose = require('mongoose')

const UserShowSchema = new mongoose.Schema({
  showName: {
    type: String,
    required: true,
  },
  showItem: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('UserShow', UserShowSchema)