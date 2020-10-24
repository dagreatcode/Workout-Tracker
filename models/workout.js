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
                type: Number,
            },
        }
    ]

},
{
        toJSON: {
            virtuals: true
        }
});

WorkoutSchema.virtual("totalDuration").get(function() {
    return this.exercises.reduce((total, current) => total + current.duration, 0)
});

const Workout = mongoose.model("Workout", WorkoutSchema);


module.exports = Workout;