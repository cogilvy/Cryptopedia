const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cryptoSchema = new Schema({
  name: {type: String, required: true},
  email: {type: String},
  password: {type: String}
}, {
  timestamps: true
});

module.exports = mongoose.model('Crypto', cryptoSchema);