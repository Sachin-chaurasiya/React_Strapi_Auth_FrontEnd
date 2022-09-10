import React, { useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { message } from "antd";
import { API, AUTH_TOKEN, BEARER } from "../../constant";
import { useEffect } from "react";

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState();

  const authToken = localStorage.getItem(AUTH_TOKEN);

  const fetchLoggedInUser = async (token) => {
    try {
      const response = await fetch(`${API}/users/me`, {
        headers: { Authorization: `${BEARER} ${token}` },
      });
      const data = await response.json();

      setUserData(data);
    } catch (error) {
      console.error(error);
      message.error("Error While Getting Logged In User Details");
    }
  };

  const handleUser = (user) => {
    setUserData(user);
  };

  useEffect(() => {
    if (authToken) {
      fetchLoggedInUser(authToken);
    }
  }, [authToken]);

  return (
    <AuthContext.Provider value={{ user: userData, setUser: handleUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
