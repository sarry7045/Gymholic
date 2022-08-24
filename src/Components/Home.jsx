import React, { useState } from "react";
import { Box } from "@mui/material";
import Exercise from "./Exercise";
import SearchExcercise from "./SearchExcercise";
import HeroBanner from "./HeroBanner";

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");

  return (
    <>
      <HeroBanner />
      <Box>
        <SearchExcercise
          setExercises={setExercises}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
        <Exercise
          setExercises={setExercises}
          exercises={exercises}
          bodyPart={bodyPart}
        />
      </Box>
    </>
  );
};

export default Home;
