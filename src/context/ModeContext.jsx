import { createContext, useState } from 'react';

export const ModeContext = createContext('dark');

export const ModeProvider = ({ children }) => {
  const [mode, setMode] = useState('light');
  const handleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };

  return (
    <ModeContext.Provider value={{ mode, handleMode }}>
      {children}
    </ModeContext.Provider>
  );
};
