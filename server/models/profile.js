const moongse = require('mongoose');

const Schema = moongse.Schema;

const profileSchema = new Schema({
    uid: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: true },
    height: { type: Number, required: true },
    weight: { type: Number, required: true },
    activity: { type: String, required: true },
    goal: { type: String, required: true }
})

module.exports = moongse.model('Profile', profileSchema);