const express = require('express');

const profileControllers = require('../controllers/profile-controllers');

const router = express.Router();

router.post('/', profileControllers.createProfile);
router.get('/:uid', profileControllers.getProfileByUid);

module.exports = router;