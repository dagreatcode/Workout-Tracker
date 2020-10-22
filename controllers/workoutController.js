const express =  require("express");
const router =  express.Router();

router.get("/api/workout", (req, res) => {
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

router.post("/api/workout", (req, res) => {
  db.Workout.create(req.body).then((neWorkout) => {
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

modules.exports = router;