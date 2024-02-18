const passport = require('passport');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { secret } = require('../config/secret');
const User = require('../models/user');

exports.registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if email or username already exists
    const existingUserByEmail = await User.findOne({ email });
    const existingUserByUsername = await User.findOne({ username });
    if (existingUserByEmail || existingUserByUsername) {
      return res.status(400).json({ message: 'Email or username already exists' });
    }

    // Create a new user
    const newUser = new User({ username, email, password });
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

      // Set token as cookie
      res.cookie('jwt', token, { httpOnly: true });
      
      return res.status(200).json({ message: 'Login successful' });
    });
  })(req, res, next);
};