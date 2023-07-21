const { mongoose, Schema } = require('mongoose')
const testSchema = new mongoose.Schema({
    patientName: {
        type: String,
        required: true,
        maxLength: 30
    },
    gender: {
        type: String,
        required: true,
        enum: [
            'Male',
            'Female',
            'Other'
        ]
    },
    address: {
        type: String,
        required: true,
    },
    age: {
        type: String,
        required: true,
    },
    ageUnit: {
        required: true,
        type: String,
        enum: [
            'Yr',
            'Month'
        ]
    },
    email: {
        required: true,
        type: String
    },
    city: {
        required: true,
        type: String
    },
    registrationDate: {
        required: true,
        type: Date
    },
    dob: {
        required: true,
        type: Date
    },
    mobile: {
        required: true,
        type: String
    },
    referredDoctor: {
        required: true,
        type: String
    },
    collectionBoy: {
        required: true,
        type: String
    },
    selectedTests: {
        required: true,
        type: Array
    },
    totalCost: {
        required: true,
        type: String
    },
    balance: {
        required: true,
        type: String
    },
    paymentMethod: {
        required: true,
        type: String,
        enum: [
            'Cash',
            'Card',
            'UPI'
        ]
    },
    collectionDate: {
        required: true,
        type: Date,
        default: Date.now
    },
})

mongoose.model('Test', testSchema)