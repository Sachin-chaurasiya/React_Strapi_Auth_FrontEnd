import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import SocialCards from "./components/SocialCards/SocialCards";
import { getToken } from "./helpers";
import SignIn from "./pages/SignIn/SignIn";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SocialCards />} />
      <Route
        path="/profile"
        element={getToken() ? <Profile /> : <Navigate to="/signin" />}
      />
      <Route path="/signin" element={getToken() ? <Profile /> : <SignIn />} />
    </Routes>
  );
};

export default AppRoutes;
