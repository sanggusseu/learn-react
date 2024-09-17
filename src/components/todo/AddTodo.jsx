import { useState } from 'react';
import { useTodos, useTodosDispatch } from '../../context/TodoContext';

export default function AddTodo() {
  const [todoText, setTodoText] = useState('');

  const todos = useTodos();
  const dispatch = useTodosDispatch();
  const handleAddTodo = text => {
    dispatch({
      type: 'added',
      nextId: todos.length,
      todoText: text,
    });
  };

  return (
    <div>
      <input
        type='text'
        value={todoText}
        onChange={e => setTodoText(e.target.value)}
        onKeyDown={e => {
          if (e.key === 'Enter' && e.nativeEvent.isComposing === false) {
            handleAddTodo(todoText);
            setTodoText('');
          }
        }}
      />
      <button
        onClick={() => {
          handleAddTodo(todoText);
          setTodoText('');
        }}
      >
        추가
      </button>
    </div>
  );
}
