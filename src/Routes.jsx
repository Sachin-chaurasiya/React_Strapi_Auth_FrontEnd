import React from "react";
import { Routes, Route } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import SocialCards from "./components/SocialCards/SocialCards";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SocialCards />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default AppRoutes;
