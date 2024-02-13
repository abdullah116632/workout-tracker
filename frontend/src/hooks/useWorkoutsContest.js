import { WorkoutContext } from "../context/WorkoutContext";
import { useContext } from "react";

export const useWorkoutsContest = () => {
  const context = useContext(WorkoutContext);

  if (!context) {
    throw Error("useWorkoutsContext must be used inside an WorkoutsProvider");
  }

  return context;
};
