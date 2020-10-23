const express =  require("express");
const router =  express.Router();
const path = require("path");

const db = require("../models");

router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/exercise", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

router.get("/stats", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});

router.get("/api/workouts", (req, res) => {
    db.Workout.find({}).then((foundWorkouts) => {
        res.json(foundWorkouts);
    }).catch(err => {
        console.log(err);
        res.json({
            error: true,
            data: null,
            message: "Failed to retrieve Workouts.",
        });
    });
});

// router.get("/api/workouts", (req, res) => {
router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({}).then((foundWorkout) => {
        res.json(foundWorkout);
    }).catch((err) =>{
        console.log(err);
        res.json({
            error: true,
            data: null,
            message: "Failed to retrieve workout.",
        }); 
    });
});

router.post("/api/workouts", (req, res) => {
  db.Workout.create(req.body).then((newWorkout) => {
      res.json(newWorkout);
  }).catch((err) =>{
      console.log(err);
      res.json({
          error: true,
          data: null,
          message: "Failed to make new workout.",
      });
  });
});

// router.put("/api/workouts:/id", (req, res) => {
//     db.Workout.find({}).then((putWorkout) => {
//         res.json(foundWorkout);
//     }).catch((err) =>{
//         console.log(err);
//         res.json({
//             error: true,
//             data: null,
//             message: "Failed to retrieve workout.",
//         });
//     });
// });
router.put("/api/workouts/:id", (req, res) => {
    // db.Exercise.create(req.body).then((newExercise) => 
    db.Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } }, {new: true})
    .then((updatedWorkout) => {
        res.json(updatedWorkout);
    }).catch(err => {
        console.log(err);
        res.json({
            error: true,
            data: null,
            message: "Failed to update Workout with id: ${req.params.id}.",
        });
    })
});

//This is here for best practice Full CRUD...
router.delete("/api/workouts/:id", (req, res) => {
  db.Workout.findByIdAndDelete(req.params.id, req.body).then((deleteWorkout) => {
      res.json(deleteWorkout);
  }).catch((err) => {
      console.log(err);
      res.json({
          error: true,
          data: null,
          message: "Failed to make new workout.",
      });
  });
});

module.exports = router;