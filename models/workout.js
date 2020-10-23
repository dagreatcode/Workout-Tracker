const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const WorkoutSchema = new Schema ({
    day: {
        type: Date, 
        default: Date.now 
    },
    exercises: [
        {
            type: {
                type: String,
            },
            name: {
                type: String,
            },
            duration: {
                type: Number,
            },
            distance: {
                type: Number,
            },
            weight: {
                type: Number,
            },
            reps: {
                type: Number,
            },
            sets: {
                type: Number
            }
        }
    ],
        toJSON: {
            virtuals: true
        }
});


module.exports = Workout;

// const { Schema } = mongoose;
// const blogSchema = new Schema({
//     title:  String, // String is shorthand for {type: String}
//     author: String,
//     body:   String,
//     comments: [{ body: String, date: Date }],
//     date: { type: Date, default: Date.now },
//     hidden: Boolean,
//     meta: {
//       votes: Number,
//       favs:  Number
//     }

// const userSchema = new mongoose.Schema({
//     // Make `name` required
//     name: { type: String, required: true },
//     age: Number
//   });