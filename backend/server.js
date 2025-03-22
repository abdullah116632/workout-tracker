require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const workoutRoutes = require("./routes/workouts");
const userRoutes = require("./routes/user");


// express app
const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL, // Replace with your frontend URL in production
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization",
  })
);

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/workouts", workoutRoutes);
app.use("/api/user", userRoutes);

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connected to database");
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log("listening for requests on port", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log("db connection failed", err);
  });
