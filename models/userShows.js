const mongoose = require('mongoose')

const UserShowsSchema = new mongoose.Schema({
  showName: {
    type: String,
    required: true,
  },
  fireworkID: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('UserShows', UserShowsSchema)