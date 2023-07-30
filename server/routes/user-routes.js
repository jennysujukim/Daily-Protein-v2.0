const express = require('express');

const userControllers = require('../controllers/user-controllers');

const router = express.Router();

router.post('/', userControllers.createUser);

module.exports = router;