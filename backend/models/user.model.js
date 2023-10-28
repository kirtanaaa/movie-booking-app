const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String, // Make sure to hash the password for security
  role: String, // Define roles as needed (e.g., 'user', 'admin')
});

const User = mongoose.model('User', userSchema);

module.exports = User;
