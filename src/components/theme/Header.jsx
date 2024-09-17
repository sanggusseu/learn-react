export default function Header({ onHandleMode, mode }) {
  return (
    // header--dark
    <header className={`header header--${mode}`}>
      <h1 className='header__title'>헤더 컴포넌트</h1>
      <button className='header__button' onClick={onHandleMode}>
        {mode === 'light' ? '다크 모드로 전환' : '라이트 모드로 전환'}
      </button>
    </header>
  );
}
