const express =  require("express");
const router =  express.Router();

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
      res.json(neWorkout);
  }).catch((err) =>{
      console.log(err);
      res.json({
          error: true,
          data: null,
          message: "Failed to make new workout.",
      });
  });
});

router.put("/api/workouts:/id", (req, res) => {
    db.Workout.find({}).then((putWorkout) => {
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

router.delete("/api/workouts", (req, res) => {
  db.Workout.create(req.body).then((deleteWorkout) => {
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