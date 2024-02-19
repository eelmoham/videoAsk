const express = require('express');
const testController = require('../controllers/testController');

const router = express.Router();

router.get('/test', testController.test);
router.get('/allUsers', testController.allUsers);

module.exports = router;