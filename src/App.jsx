import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import "./App.css";
const Home = React.lazy(() => import("./Components/Home"));
const Navbar = React.lazy(() => import("./Components/Navbar"));
const ExerciseDetails = React.lazy(() =>
  import("./Components/ExerciseDetails")
);
const Footer = React.lazy(() => import("./Components/Footer"));

const App = () => {
  return (
    <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetails />} />
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
