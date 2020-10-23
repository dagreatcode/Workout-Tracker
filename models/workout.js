const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const Workout = mongoose.model("Workout", WorkoutSchema);
const WorkoutSchema = new Schema ({
    day: {
        type: Date, 
        default: Date.now 
    },
    exercises: [
        {
            type: {
                type: String,
                required: "Type of Exercise is Required",
                minLength: 1
            },
            name: {
                type: String,
                required: "Name of Exercise is Required",
                minLength: 1
            },
            duration: {
                type: Number,
                required: "Duration of Exercise is Required"
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

WorkoutSchema.virtual("totalDuration").get(function(){
    return this.exercises.reduce((total, current) => total +  total + current.duration, 0)
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