const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let todoSchema = new Schema({
    description: { type: String, required: true },
    done: { type: Boolean, default: true }
});

module.exports = mongoose.model('Todo', todoSchema); //in this line,we have passed todoSchema by creating it's model

