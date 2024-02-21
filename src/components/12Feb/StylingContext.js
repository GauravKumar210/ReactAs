// StylingContext.js
import React, { createContext, useContext, useState } from 'react';

const StylingContext = createContext();

export const StylingProvider = ({ children }) => {
  const [textStyle, setTextStyle] = useState({
    color: 'black',
    fontFamily: 'Arial, sans-serif',
  });

  const updateStyle = (newStyle) => {
    setTextStyle((prevStyle) => ({ ...prevStyle, ...newStyle }));
  };

  return (
    <StylingContext.Provider value={{ textStyle, updateStyle }}>
      {children}
    </StylingContext.Provider>
  );
};

export const useStyling = () => {
  return useContext(StylingContext);
};
