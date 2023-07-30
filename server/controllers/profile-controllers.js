const HttpError = require('../models/http-errors');

const DUMMY_DATA = [
    {
        age: 20,
        gender: "Female",
        height: 170,
        weight: 60,
        activity: "Moderate",
        goal: "Lose Weight"
    }
]

function createProfile (req, res, next) {
    const { age, gender, height, weight, activity, goal } = req.body;

    const createdProfile = {
        age,
        gender,
        height,
        weight,
        activity,
        goal
    }

    DUMMY_DATA.push(createdProfile);

    if(!createdProfile) {
        return next(
            new HttpError('Could not create profile', 404)
        )
    }

    res.status(201).json({ profile: createdProfile });

    //console.log(DUMMY_DATA)
}

exports.createProfile = createProfile;