const mongoose = require('mongoose');

const {Schema} = mongoose;

const DoorsSchema = new Schema({
    building: {
        type: String,
        required: true,
    },
    floor: {
        type: Number,
        required: true,
    },
    department: {
        type: String,
        required: true,
    },
    gate: {
        type: String,
        required: true,
    },
    checkinTime: {
        type: Date,
        default: Date.now,
        required: true,
    },
    checkoutTime: Date,
})

const VisitationSchema = new Schema({
    department: {
        type: String,
        required: true
    },
    checkinTime: {
        type: Date,
        default: Date.now,
        required: true
    },
    checkoutTime: {
        type: Date,
        default: Date.now
    },
    doors: [DoorsSchema]
});

const VisitorSchema = new Schema({
    userId: {
        type: String,
        required: true,
        unique: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    visitation: VisitationSchema
});

const Visitor = mongoose.model('Visitor', VisitorSchema);
module.exports = Visitor;