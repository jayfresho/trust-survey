"use client";

import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [toggleSidebar, setToggleSidebar] = useState(false);

  return (
    <GlobalContext.Provider value={{ toggleSidebar, setToggleSidebar }}>
      {children}
    </GlobalContext.Provider>
  );
};
