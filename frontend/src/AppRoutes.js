import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import LandingPage from "./pages/LandingPage/LandingPage";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<LandingPage />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
