const Workout = require('../models/workoutModel');
const mongoose = require("mongoose");

// create new workout
const  createWorkout = async (req, res) => {
    const {title, load, reps} = req.body
  
    try {
      const workout = await Workout.create({title, load, reps})
      res.status(200).json(workout)
    } catch (error) {
      res.status(400).json({error: error.message})
    }
}

// get all workout
const getworkouts = async (req, res) => {
    const workout = await Workout.find().sort({createdAt: -1})

    res.status(200).json(workout)
}

// get a single workout
const getWorkout = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "NO such workout"})
    }

    const workout = await Workout.findById(id);

    if(!workout){
        return res.status(404).json({error: "NO such workout"});
    }

    res.status(200).json(workout);
}

//Delete workout
const deleteWorkout = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "NO such workout"})
    }

    const workout = await Workout.findOneAndDelete({_id: id});

    if(!workout){
        return res.status(404).json({error: "NO such workout"});
    }

    res.status(200).json(workout);
}

//update a workout
const updateWorkout = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "NO such workout"})
    }

    const workout = await Workout.findOneAndUpdate({_id: id}, {...req.body});

    if(!workout){
        return res.status(404).json({error: "NO such workout"});
    }

    res.status(200).json(workout)
}


module.exports = {
    getworkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
}