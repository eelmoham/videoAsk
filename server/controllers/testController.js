exports.test = async (req, res) => {
  try {
    res.status(200).json({ message: 'Test route works' });
  }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}


const User = require('../models/user');

exports.allUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ users });
  }
  catch (err) {
    res.status(500).json({ message: err.message });
  }
}