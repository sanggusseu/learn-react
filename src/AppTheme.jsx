import './AppTheme.css';
import HeaderTheme from './components/theme/Header.jsx';
import MainTheme from './components/theme/Main.jsx';
import FooterTheme from './components/theme/Footer.jsx';
import { ModeProvider } from './context/ModeContext.jsx';
function AppTheme(props) {
  return (
    <>
      <ModeProvider>
        <HeaderTheme />
        <MainTheme />
        <FooterTheme />
      </ModeProvider>
    </>
  );
}

export default AppTheme;
