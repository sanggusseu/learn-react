import './App.css';
import TodoList from './components/todo/TodoList';
import todoReducer from './reducer/todoReducer';
import { useImmerReducer } from 'use-immer';
import AddTodo from './components/todo/AddTodo';

function AppTodo(props) {
  const [todos, dispatch] = useImmerReducer(todoReducer, [
    { id: 0, text: 'HTML&CSS 공부하기', done: false },
    { id: 1, text: '자바스크립트 공부하기', done: false },
  ]);

  // 1] added
  const handleAddTodo = text => {
    dispatch({
      type: 'added',
      nextId: todos.length,
      todoText: text,
    });
  };

  // 3] deleted
  const handleDeleteTodo = deleteId => {
    dispatch({
      type: 'deleted',
      deleteId,
    });
    // const newTodos = todos.filter(item => item.id !== deleteId);
    // setTodos(newTodos);
  };

  // 4] 'done'
  const handleToggleTodo = (id, done) => {
    dispatch({
      type: 'done',
      id,
      done,
    });
    // const nextTodos = todos.map(item => {
    //   if (item.id === id) {
    //     return { ...item, done };
    //   }
    //   return item;
    // });
    // setTodos(nextTodos);
  };

  return (
    <div>
      <h2>할일목록</h2>
      <AddTodo onAddTodo={handleAddTodo} />

      <TodoList
        todos={todos}
        onDeleteTodo={handleDeleteTodo}
        onToggleTodo={handleToggleTodo}
      />
    </div>
  );
}

export default AppTodo;
