const express = require('express');
const router = express.Router();

const { getProfile } = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/profile', authMiddleware, getProfile);

module.exports = router;