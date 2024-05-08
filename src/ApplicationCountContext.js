// ApplicationCountContext.js
import React, { createContext, useState, useContext } from 'react';

const ApplicationCountContext = createContext();

export const useApplicationCount = () => {
  const context = useContext(ApplicationCountContext);
  if (!context) {
    throw new Error('useApplicationCount must be used within a ApplicationCountProvider');
  }
  return context;
};

export const ApplicationCountProvider = ({ children }) => {
  const [applicationCount, setApplicationCount] = useState(0);

  const incrementApplicationCount = () => {
    setApplicationCount(prevCount => prevCount + 1);
  };

  return (
    <ApplicationCountContext.Provider value={{ applicationCount, incrementApplicationCount }}>
      {children}
    </ApplicationCountContext.Provider>
  );
};

export default ApplicationCountContext;
