import { useContext } from 'react';
import { ModeContext } from '../../context/ModeContext';

export default function Header() {
  const { mode, handleMode } = useContext(ModeContext);
  return (
    // header--dark
    <header className={`header header--${mode}`}>
      <h1 className='header__title'>헤더 컴포넌트</h1>
      <button className='header__button' onClick={handleMode}>
        {mode === 'light' ? '다크 모드로 전환' : '라이트 모드로 전환'}
      </button>
    </header>
  );
}
