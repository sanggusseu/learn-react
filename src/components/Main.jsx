import { useState } from 'react';
import Counter from './Counter';

function Main() {
  const [total, setTotal] = useState(0);
  const handleTotal = () => {
    setTotal(total + 1);
  };
  return (
    <main>
      <h2>totla: {total}</h2>
      <Counter onTotal={handleTotal} />
      <hr />
      <Counter onTotal={handleTotal} />
      <hr />
      <Counter />
    </main>
  );
}

export default Main;
