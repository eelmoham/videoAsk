// const mongoose = require('mongoose');

const videoAskSchema = new mongoose.Schema({
    id : { type: String, required: true, unique: true },
    path : { type: String, required: true , unique: true},
    options: [optionsSchema]
});

const optionsSchema = new mongoose.Schema({
    id : { type: String, required: true, unique: true },
    video : [videoAskSchema],
});

const  VideoAsk = mongoose.model('VideoAsk', videoAskSchema);

module.exports = VideoAsk;