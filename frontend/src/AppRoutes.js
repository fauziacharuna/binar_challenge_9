import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import LoginPage from "./pages/Login/LoginPage";
import RegisterPage from "./pages/Register/RegisterPage";
import ProfilePage from "./pages/Profile/ProfilePage";

const AppRoutes = () => {
  return (
    <>
      <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/" element={<LandingPage/>} />
          <Route path="/profile/:id" element={<ProfilePage/>} />
      </Routes>
    </>
  );
};

export default AppRoutes;
