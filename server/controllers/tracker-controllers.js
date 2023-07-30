const HttpError = require('../models/http-errors');

const DUMMY_DATA = [
    {
        uid: "bHSrkdyidxRpEdNyMqPcSpaYHVi2",
        name: 'Chicken',
        protein: 20
    },
    {
        uid: "bHSrkdyidxRpEdNyMqPcSpaYHVi2",
        name: 'Beef',
        protein: 30
    }
]

function createTracker (req, res, next) {
    const { uid, name, protein } = req.body;

    const createdTracker = {
        uid,
        name,
        protein
    }

    DUMMY_DATA.push(createdTracker);

    if(!createdTracker) {
        return next(
            new HttpError('Could not create tracker', 404)
        )
    }

    res.status(201).json(createdTracker);

    console.log(DUMMY_DATA)

}

function getTrackerByUid (req, res, next) {
    const uid = req.params.uid;

    const tracker = DUMMY_DATA.filter(doc => {
        return doc.uid === uid;
    })

    if(!tracker) {
        return next(
            new HttpError('Could not find tracker for the provided uid', 404)
        )
    }

    res.status(201).json(tracker);

}

exports.createTracker = createTracker;
exports.getTrackerByUid = getTrackerByUid;