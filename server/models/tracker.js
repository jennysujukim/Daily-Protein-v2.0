const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// create Tracker Schema
const trackerSchema = new Schema({
    uid: { type: String, required: true },
    name: { type: String, required: true },
    protein: { type: Number, required: true }
})

module.exports = mongoose.model('Tracker', trackerSchema)