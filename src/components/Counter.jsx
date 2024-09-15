import { useState } from 'react';

function Counter({ onTotal }) {
  const [counter, setCounter] = useState(0);

  console.log('Counter');

  const handleCounter = () => {
    setCounter(counter + 1);
    if (onTotal) {
      onTotal();
    }
  };

  return (
    <>
      <button onClick={handleCounter}>Counter {counter} </button>
      <input type='text' />
    </>
  );
}

export default Counter;
