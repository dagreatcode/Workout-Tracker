const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const WorkoutSchema = new Schema ({
    day: {
        type: Data,
  
    },
        toJSON: {
            virtuals: true
        }
});


modules.exports = Workout;