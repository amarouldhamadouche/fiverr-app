import React from "react";
import Home from "../src/routes/Home";
import { Route, Routes } from "react-router-dom";
import Register from "../src/routes/register";
import Login from "./routes/login";
import Instructor from "./routes/Instructor";
import Pricing from "./routes/Pricing";
import School from "./routes/School";
import Pupil from "./routes/Pupil";
import Booking from "./routes/Booking";
import StepperMain from "./routes/StepperMain";
import "./components/Steps/steps.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/school" element={<School />} />
        <Route path="/instructor" element={<Instructor />} />
        <Route path="/pupil" element={<Pupil />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/stepper" element={<StepperMain />} />
      </Routes>
    </>
  );
}

export default App;
