import React from "react";
<<<<<<< HEAD
import {BrowserRouter, Route, Routes} from "react-router-dom";
=======
import { Route, Routes } from "react-router-dom";
import Game from "./pages/Games/Game";
>>>>>>> 7b889862efd07627cd34b7f9c2963e4519cc5b1e
import LandingPage from "./pages/LandingPage/LandingPage";
import LoginPage from "./pages/Login/LoginPage";
import RegisterPage from "./pages/Register/RegisterPage";

const AppRoutes = () => {
<<<<<<< HEAD
    return (
                <Routes>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/register" element={<RegisterPage/>}/>
                    <Route path="/" element={<LandingPage/>}/>
                </Routes>
    );
=======
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
>>>>>>> 7b889862efd07627cd34b7f9c2963e4519cc5b1e
};

export default AppRoutes;
