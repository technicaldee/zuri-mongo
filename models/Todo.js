const mongoose = require("mongoose")

const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    timestamp: {
        type: Date,
        required: true,
        default: Date.now
    },
});

module.exports = new mongoose.model("Todo", TodoSchema);