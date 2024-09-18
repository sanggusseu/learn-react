import { useRef, useState } from 'react';

export default function AppRef() {
  const countRef = useRef(0);
  const [count, setCount] = useState(0);

  console.log('✅ 리렌더링!');

  const handleClick = () => {
    // countRef.current++;
    // console.log('countRef: ', countRef.current);
    setCount(count + 1);
  };

  return (
    <>
      <h2>Count</h2>
      <button onClick={handleClick}>Count</button>
    </>
  );
}
