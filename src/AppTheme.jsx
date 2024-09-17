import './AppTheme.css';
import HeaderTheme from './components/theme/Header.jsx';
import MainTheme from './components/theme/Main.jsx';
import FooterTheme from './components/theme/Footer.jsx';
import { useState } from 'react';
import { ModeContext } from './context/ModeContext.jsx';
function AppTheme(props) {
  const [mode, setMode] = useState('light');
  const handleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };
  return (
    <>
      <ModeContext.Provider value={{ mode, handleMode }}>
        <HeaderTheme />
        <MainTheme />
        <FooterTheme />
      </ModeContext.Provider>
    </>
  );
}

export default AppTheme;
