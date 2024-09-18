import TodoItem from './TodoItem';
import { useTodos } from '../../context/TodoContext';
import { useEffect, useMemo, useState } from 'react';

function TodoList() {
  const todos = useTodos();
  const [isDone, setIsDone] = useState(false);

  const getFilteredTodos = () => {
    if (!isDone) {
      return todos;
    }
    return todos.filter(item => item.done === true);
  };

  const getStatsCount = () => {
    console.log('getStatsCount 함수 실행!');
    const totalCount = todos.length;
    const doneCount = todos.filter(item => item.done === true).length;
    return { totalCount, doneCount };
  };

  const { totalCount, doneCount } = useMemo(() => getStatsCount(), [todos]);

  const filteredTodos = getFilteredTodos();

  return (
    <>
      <div>
        <input
          id='isDone'
          type='checkbox'
          checked={isDone}
          onChange={e => {
            setIsDone(e.target.checked);
          }}
        />
        <label htmlFor='isDone'>
          완료된 항목 보기({doneCount}/{totalCount})
        </label>
      </div>
      <ul>
        {filteredTodos.map(item => (
          <li key={item.id}>
            <TodoItem item={item} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;
