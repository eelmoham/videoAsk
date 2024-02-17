// controllers/authController.js
const passport = require('passport');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { secret } = require('../config/secret');
const User = require('../models/user');

exports.registerUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }
    const newUser = new User({ email, password });
    await newUser.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.loginUser = (req, res, next) => {
  passport.authenticate('local', { session: false }, (err, user) => {
    if (err || !user) {
      return res.status(401).json({ message: 'Authentication failed' });
    }
    req.login(user, { session: false }, (err) => {
      if (err) {
        res.send(err);
      }
      const token = jwt.sign({ id: user._id }, secret);
      return res.status(200).json({ token });
    });
  })(req, res, next);
};
