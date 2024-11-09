const mongoose = require('mongoose');

const confessionSchema = new mongoose.Schema({
  text: { type: String, required: true },
  author: { type: String, default: 'Anonymous' },
  category: { type: String },
  enableChat: { type: Boolean, default: true },
  likes: { type: Number, default: 0 },  // New field for likes
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Confession', confessionSchema);
