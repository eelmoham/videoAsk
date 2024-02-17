const mongoose = require('mongoose');

module.exports = {
  connect: () => {
    mongoose.connect('mongodb+srv://mrx:Mehdizero@vedioask-cluster.duz4rxd.mongodb.net/?retryWrites=true&w=majority', {
      // useNewUrlParser: true,
      // useUnifiedTopology: true
    })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));
  }
};