const bcrypt = require('bcryptjs');
const saltRounds = 10;

const salt = bcrypt.genSaltSync(saltRounds);
const hashedPassword = bcrypt.hashSync(process.env.EMAIL, salt);

const user_admin = {
    email: process.env.EMAIL,
    hashedPassword: hashedPassword,
    username: 'AdminAndrea:)',
    role: 'admin'
  }

  module.exports = user_admin