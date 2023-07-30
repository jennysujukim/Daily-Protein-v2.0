const HttpError = require('../models/http-errors');
const Profile = require('../models/profile');

// -- CREATE PROFILE -- //
async function createProfile (req, res, next) {
    const { uid, age, gender, height, weight, activity, goal } = req.body;

    const createdProfile = new Profile({
        uid,
        age,
        gender,
        height,
        weight,
        activity,
        goal
    })

    try {
        await createdProfile.save();
    } catch(err) {
        const error = new HttpError('Creating profile failed, please try again', 500);
        return next(error);
    }

    if(!createdProfile) {
        const error = new HttpError('Could not create profile', 404);
        return next(error);
    }

    res.status(201).json({ profile: createdProfile });
}


// -- GET PROFILE BY UID -- //
async function getProfileByUid (req, res, next){
    const uid = req.params.uid;

    let profile;

    try {
    profile = await Profile.findOne({ uid: uid });

    } catch(err) {
        const error = new HttpError('Fetching profile failed, please try again', 500);
        return next(error);
    }

    if(!profile) {
        const error = new HttpError('Could not find profile for the provided user id', 404);
        return next(error);
    }

    res.status(201).json({ profile: profile.toObject( {getters: true} )});
}


exports.createProfile = createProfile;
exports.getProfileByUid = getProfileByUid;