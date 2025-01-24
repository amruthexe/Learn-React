import React from "react";
import { createContext } from "react";
const UserContext = createContext();
const UserContextProvider = ({children}) => {
 
  const data = "amruth";

  return <UserContext.Provider value={data}>
    {children}
  
  </UserContext.Provider >;
};

export  {UserContext,UserContextProvider};
