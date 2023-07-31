const express = require('express');

const profileControllers = require('../controllers/profile-controllers');

const router = express.Router();

// for create profile
router.post('/', profileControllers.createProfile);
// for read profile by uid
router.get('/:uid', profileControllers.getProfileByUid);

module.exports = router;