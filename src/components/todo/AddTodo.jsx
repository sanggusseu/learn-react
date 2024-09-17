import { useState } from 'react';

export default function AddTodo({ onAddTodo }) {
  const [todoText, setTodoText] = useState('');
  return (
    <div>
      <input
        type='text'
        value={todoText}
        onChange={e => setTodoText(e.target.value)}
        onKeyDown={e => {
          if (e.key === 'Enter' && e.nativeEvent.isComposing === false) {
            onAddTodo(todoText);
            setTodoText('');
          }
        }}
      />
      <button
        onClick={() => {
          onAddTodo(todoText);
          setTodoText('');
        }}
      >
        추가
      </button>
    </div>
  );
}
