import { createContext, useContext } from "react";

export const AuthContext = createContext({
  user: undefined,
  setUser: () => {},
});

export const useAuthContext = () => useContext(AuthContext);
