import React, {useContext, createContext, useState } from "react";
const AppContext = createContext();
const AppProvider = ({ children }) => {

const [markdown, setMarkdown] = useState("## This is a markdown editor");

  return (
    <AppContext.Provider
      value={{
        markdown,
        setMarkdown
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
