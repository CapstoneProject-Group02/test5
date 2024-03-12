import React from "react";
import Login from "./Components/Driver/Login";
import Signup from "./Components/Driver/Signup";
import Login1 from "./Components/Officer/Login1";
import Signup1 from "./Components/Officer/Signup1";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLogin from "./pages/MainPage";
import PoliceOfficerInterface from "./pages/PoliceOfficerInterface";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLogin />} />
        <Route path="/log" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/log1" element={<Login1 />} />
        <Route path="/signup1" element={<Signup1 />} />
        <Route path="/inter" element={<PoliceOfficerInterface/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
