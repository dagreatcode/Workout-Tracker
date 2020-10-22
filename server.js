const express = require("express");
const mongoose = require("mongoose");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/Workout-Tracker",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  );
  
  const connection = mongoose.connection;
  
  connection.on("connected", () => {
    console.log("Mongoose successfully connected.");
  });
  
  connection.on("error", (err) => {
    console.log("Mongoose connection error: ", err);
  });
  
  app.get("/api/config", (req, res) => {
    res.json({
      success: true,
    });
  });

  app.get("/api/workout", (req, res) => {
      db.Workout-Tracker.find({}).then((foundWorkouts) => {
          res.json(foundWorkouts);
      }).catch((err) =>{
          console.log(err);
          res.json({
              error: true,
              data: null,
              message: "Failed to retrieve workouts.",
          });
      });
  });

  app.post("/api/workout", (req, res) => {
    db.Workout-Tracker.create(req.body).then((newWorkouts) => {
        res.json(newWorkouts);
    }).catch((err) =>{
        console.log(err);
        res.json({
            error: true,
            data: null,
            message: "Failed to make new workouts.",
        });
    });
  });

  app.listen(PORT, () => console.log("connected"));
