import { useContext } from 'react';
import { ModeContext } from '../../context/ModeContext';

export default function Footer() {
  const { mode } = useContext(ModeContext);
  return (
    <footer className={`footer footer--${mode}`}>
      <p className='footer__text'>푸터 컴포넌트</p>
    </footer>
  );
}
