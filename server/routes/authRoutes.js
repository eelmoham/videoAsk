// routes/authRoutes.js
const express = require('express');
const authController = require('../controllers/authController');
const testController = require('../controllers/testController');

const router = express.Router();

router.post('/register', authController.registerUser);
router.post('/login', authController.loginUser);

// router.get('/test', testController.test);

module.exports = router;
