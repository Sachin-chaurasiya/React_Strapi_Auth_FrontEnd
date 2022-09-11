import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import SocialCards from "./components/SocialCards/SocialCards";
import { AUTH_TOKEN } from "./constant";
import SignIn from "./pages/SignIn/SignIn";

const AppRoutes = () => {
  const token = localStorage.getItem(AUTH_TOKEN);
  return (
    <Routes>
      <Route path="/" element={<SocialCards />} />
      <Route
        path="/profile"
        element={token ? <Profile /> : <Navigate to="/" />}
      />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  );
};

export default AppRoutes;
