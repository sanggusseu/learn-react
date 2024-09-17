import { useState } from 'react';
import './App.css';
import TodoList from './components/todo/TodoList';

export default function AppTodo() {
  const [todoText, setTodoText] = useState('');
  const [todoIndex, setTodoIndex] = useState(0);
  const [todos, setTodos] = useState([
    { id: 0, text: 'HTML&CSS 공부하기', done: false },
    { id: 1, text: '자바스크립트 공부하기', done: false },
  ]);

  const handleTodoTextChange = e => {
    setTodoText(e.target.value);
  };

  const handleAddTodo = () => {
    const newArr = [...todos];
    newArr.splice(todoIndex, 0, {
      id: todos.length + 2,
      text: todoText,
      done: false,
    });

    setTodos(newArr);
    setTodoText('');
  };

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      handleAddTodo();
    }
  };

  const handleDeleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
    setTodoText('');
  };

  const handleToogleTodo = (id, done) => {
    const nextTodos = todos.map(item => {
      if (item.id === id) {
        return { ...item, done };
      }
      return item;
    });
    setTodos(nextTodos);
  };

  const handleChangeTodoIndex = e => {
    setTodoIndex(e.target.value);
  };
  return (
    <div>
      <h2>할일목록</h2>
      <div>
        <input
          type='text'
          onChange={handleTodoTextChange}
          value={todoText}
          onKeyDown={handleKeyDown}
        />
        <button type='button' onClick={handleAddTodo}>
          추가
        </button>
      </div>
      <div>
        <select
          name=''
          id=''
          value={todoIndex}
          onChange={handleChangeTodoIndex}
        >
          {todos.map((_, index) => (
            <option value={index} key={index}>
              {index} 번째
            </option>
          ))}
        </select>
        <button type='button' onClick={handleAddTodo}>
          {todoIndex}번째 추가
        </button>
      </div>
      <div>Preview: {todoText}</div>
      <TodoList
        todos={todos}
        onDelete={handleDeleteTodo}
        onToogleTodo={handleToogleTodo}
      />
    </div>
  );
}
