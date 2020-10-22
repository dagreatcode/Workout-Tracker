const express = require("express");
const mongoose = require("mongoose");
const app = express();

const PORT = process.env.PORT || 3000;

const db = require("./models");
const exerciseController = require("./controllers/exerciseController");

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

//   app.get("/api/exercise", (req, res) => {
//       db.Exercise.find({}).then((foundExercise) => {
//           res.json(foundExercise);
//       }).catch((err) =>{
//           console.log(err);
//           res.json({
//               error: true,
//               data: null,
//               message: "Failed to retrieve Exercise.",
//           });
//       });
//   });

//   app.post("/api/exercise", (req, res) => {
//     db.Exercise.create(req.body).then((newExercise) => {
//         res.json(newExercise);
//     }).catch((err) =>{
//         console.log(err);
//         res.json({
//             error: true,
//             data: null,
//             message: "Failed to make new Exercise.",
//         });
//     });
//   });

  app.use(exerciseController);

  app.listen(PORT, () => console.log("connected"));
