import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Game from "./pages/Games/Game";
import LandingPage from "./pages/LandingPage/LandingPage";
import LoginPage from "./pages/Login/LoginPage";
import RegisterPage from "./pages/Register/RegisterPage";

const AppRoutes = () => {

  return (
    <>
      <Routes>
        <Route path="/game" element={<Game />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
