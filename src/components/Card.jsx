export default function Card({ title, children, mode }) {
  return (
    <div className={`card card--${mode}`}>
      <div className='card__header'>{title}</div>
      <div className='card__body'>{children}</div>
    </div>
  );
}
