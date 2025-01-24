const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
    },
    course: {
        type: String,
        required: true,
        trim: true,
    },
    month: {
        type: Number,
        required: true,
    },
    startDate: {
        type: Date,
        required: true,
    },
    weight: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    difficultyLevel: {
        type: String,
        required: true,
        trim: true,
    },
    totalPrice: {
        type: Number,
        required: true,
    },
    trainerName: {
        type: String,
        required: true,
        trim: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
});

module.exports = mongoose.model('Course', courseSchema);
