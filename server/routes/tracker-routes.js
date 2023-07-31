const express = require('express');

const trackerControllers = require('../controllers/tracker-controllers');

const router = express.Router();

// for create tracker
router.post('/', trackerControllers.createTracker);
// for read tracker by uid(saved from Firebase Auth)
router.get('/:uid', trackerControllers.getTrackerByUid);
// for delete tracker by id
router.delete('/:id', trackerControllers.deleteTrackerById);

module.exports = router;