const HttpError = require('../models/http-errors');
const Tracker = require('../models/tracker');

// -- CREATE TRACKER -- //
async function createTracker (req, res, next) {
    const { uid, name, protein } = req.body;

    const createdTracker = new Tracker({
        uid,
        name,
        protein
    })

    try {
        await createdTracker.save();
        console.log(createdTracker)
    } catch(err) {
        const error = new HttpError('Creating tracker failed, please try again', 500);
        return next(error);
    }

    if(!createdTracker) {
        const error = new HttpError('Could not create tracker', 404);
        return next(error);
    }

    res.status(201).json({ tracker: createdTracker });
}


// -- GET TRACKER BY UID -- //
async function getTrackerByUid (req, res, next) {
    const uid = req.params.uid;

    let trackerData;

    try {
        trackerData = await Tracker.find({ uid: uid });
        console.log(trackerData)
    } catch(err) {
        const error = new HttpError('Fetching tracker failed, please try again', 500);
        return next(error);
    }

    if(!trackerData || trackerData.length === 0) {
        const error = new HttpError('Could not find tracker for the provided user id', 404);
        return next(error);
    }

    res.status(201).json({ tracker: trackerData.map(data => data.toObject({ getters: true }))});

}

// -- DELETE TRACKER BY ID -- //

async function deleteTrackerById (req, res, next) {
    const trackerId = req.params.id;

    let deletedTracker;
    try {
        deletedTracker = await Tracker.findByIdAndDelete(trackerId);
    }catch(err) {
        const error = new HttpError('Something went wrong, could not delete tracker', 500);
        return next(error);
    }

    if(!deletedTracker) {
        const error = new HttpError('Could not find tracker for this id', 404);
        return next(error);
    }

    res.status(201).json({ message: 'Item deleted successfully' })
}


exports.createTracker = createTracker;
exports.getTrackerByUid = getTrackerByUid;
exports.deleteTrackerById = deleteTrackerById;