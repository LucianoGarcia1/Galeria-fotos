import React, { createContext, useState } from "react";

export const MyContext = createContext();

export const Context = ({ children }) => {
  const [dados, setDados] = useState(null);
  const [pages, setPages] = useState(1);
  return (
    <MyContext.Provider value={{ dados, setDados, pages, setPages }}>
      {children}
    </MyContext.Provider>
  );
};
