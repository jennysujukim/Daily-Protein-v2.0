const HttpError = require('../models/http-errors');

const DUMMY_DATA = [
    { uid: "uid1" }
]

function createUser (req, res, next) {
    const uid = req.body.uid;

    const createdUser = { uid };

    DUMMY_DATA.push(createdUser);

    if(!createdUser) {
        return next(
            new HttpError('Could not create user', 404)
        )
    }

    res.status(201).json({ user: createdUser });
    // console.log(DUMMY_DATA);
}

exports.createUser = createUser;