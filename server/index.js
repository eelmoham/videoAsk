const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const { connect } = require('./config/database');
// const authRoutes = require('./routes/authRoutes');
// const { secret } = require('./config/secret');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(passport.initialize());
// require('./config/passport')(passport);

// Routes
// app.use('/auth', authRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connect();
});