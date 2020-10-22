const express =  require("express");
const router =  express.Router();

router.get("/api/exercise", (req, res) => {
    db.Exercise.find({}).then((foundExercise) => {
        res.json(foundExercise);
    }).catch((err) =>{
        console.log(err);
        res.json({
            error: true,
            data: null,
            message: "Failed to retrieve Exercise.",
        });
    });
});

router.post("/api/exercise", (req, res) => {
  db.Exercise.create(req.body).then((newExercise) => {
      res.json(newExercise);
  }).catch((err) =>{
      console.log(err);
      res.json({
          error: true,
          data: null,
          message: "Failed to make new Exercise.",
      });
  });
});

modules.exports = router;