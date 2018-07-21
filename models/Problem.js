const mongoose = require('mongoose');
const Schema = mongoose.Schema

const ProblemSchema = new Schema({
    category: {
        type: String,
        required: true
    },
    subCategory: {
        type: String,
        required: true
    },
    issue: {
        type: String,
        required: true
    }, 
    question: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    }
})

module.exports = User = mongoose.model('problem', ProblemSchema );

