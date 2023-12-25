// Context
import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [userName, setUserName] = useState(null);

  const login = (user) => {
    setUserInfo(user);
  };

  const setName = (user) => {
    setUserName(user);
  };
  const contextValue = {
    userInfo,
    userName,
    login,
    setName,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
