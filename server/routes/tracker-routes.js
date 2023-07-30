const express = require('express');

const trackerControllers = require('../controllers/tracker-controllers');

const router = express.Router();

router.post('/', trackerControllers.createTracker);
router.get('/:uid', trackerControllers.getTrackerByUid);
router.delete('/:id', trackerControllers.deleteTrackerById);

module.exports = router;