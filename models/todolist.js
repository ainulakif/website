import mongoose, { Schema, model, models } from "mongoose";

const TodolistSchema = new Schema({
    todolist: {
        type: String,
        required: [true, "Todolist is required."],
    },
    isComplete: {
        type: Boolean,
    }

});

const Todolist = models.Todolist || model('Todolist', TodolistSchema);

export default Todolist;