import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [selectedGoals, setSelectedGoals] = useState([]);
  const [selectedNeeds, setSelectedNeeds] = useState([]);

  return (
    <AppContext.Provider value={{ selectedGoals, setSelectedGoals, selectedNeeds, setSelectedNeeds }}>
      {children}
    </AppContext.Provider>
  );
};