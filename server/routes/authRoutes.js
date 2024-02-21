// routes/authRoutes.js
const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

router.post('/register', authController.registerUser);
router.post('/login', authController.loginUser);

router.get('/logout', authController.logoutUser);
router.get('/authenticated', authController.isAuthenticated);

module.exports = router;
