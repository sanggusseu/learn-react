import { useContext } from 'react';
import { ModeContext } from '../context/ModeContext';

export default function Card({ title, children }) {
  const { mode } = useContext(ModeContext);
  return (
    <div className={`card card--${mode}`}>
      <div className='card__header'>{title}</div>
      <div className='card__body'>{children}</div>
    </div>
  );
}
