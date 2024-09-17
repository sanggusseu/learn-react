export default function Footer({ mode }) {
  return (
    <footer className={`footer footer--${mode}`}>
      <p className='footer__text'>푸터 컴포넌트</p>
    </footer>
  );
}
