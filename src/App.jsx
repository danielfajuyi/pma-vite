import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import JobPost from "./Pages/JobPost/JobPost";
import FindModel from "./Pages/FindModel/find-model";
import Navbar from "./Components/Navbar/navbar";
import About from "./Pages/About/about";

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/jobpost/*" element={<JobPost />} />
      <Route path="/find-model/*" element={<FindModel />} />
    </Routes>
  </BrowserRouter>
);

export default App;
