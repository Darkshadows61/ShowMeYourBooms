const mongoose = require('mongoose')

const UserShowsSchema = new mongoose.Schema({
  showName: {
    type: String,
    required: true,
  },
  fireworkID: {
    type: String,
    required: false,
  },
  fireworkID1: {
    type: String,
    required: true,
  },
  fireworkID2: {
    type: String,
    required: true,
  },
  fireworkID3: {
    type: String,
    required: true,
  },
  fireworkID4: {
    type: String,
    required: true,
  },
  fireworkID5: {
    type: String,
    required: true,
  },
  fireworkID6: {
    type: String,
    required: true,
  },
  fireworkID7: {
    type: String,
    required: true,
  },
  fireworkID8: {
    type: String,
    required: true,
  },
  fireworkID9: {
    type: String,
    required: true,
  },
  fireworkID10: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('UserShows', UserShowsSchema)