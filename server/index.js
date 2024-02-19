// index.js

const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const { connect } = require('./config/database');
const configurePassport = require('./config/passport'); // Corrected line
const authRoutes = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const testRoutes = require('./routes/testRoutes');


const app = express();
// Middleware
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(cookieParser());
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
configurePassport(passport); // Corrected line

// Routes
app.use('/auth', authRoutes);
app.use('/test', testRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connect();
});
