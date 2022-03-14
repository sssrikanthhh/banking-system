const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
  address: { type: String, required: true },
  gender: { type: String, default: 'female' },
  type: { type: String, default: 'customer' }
}, { versionKey: false, timestamps: true });

const User = mongoose.model('user', userSchema);

module.exports = User;