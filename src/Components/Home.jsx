import React, { useState } from "react";
import { Box } from "@mui/material";
const Exercise = React.lazy(() => import("./Exercise"));
const SearchExcercise = React.lazy(() => import("./SearchExcercise"));
const HeroBanner = React.lazy(() => import("./HeroBanner"));

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
