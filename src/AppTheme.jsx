import './AppTheme.css';
import HeaderTheme from './components/theme/Header.jsx';
import MainTheme from './components/theme/Main.jsx';
import FooterTheme from './components/theme/Footer.jsx';
import { useState } from 'react';
function AppTheme(props) {
  const [mode, setMode] = useState('light');
  const handleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };
  return (
    <>
      <HeaderTheme onHandleMode={handleMode} mode={mode} />
      <MainTheme mode={mode} />
      <FooterTheme mode={mode} />
    </>
  );
}

export default AppTheme;
