export default function TodoList({ todos = [], onDelete, onToogleTodo }) {
  return (
    <ul>
      {todos.map(item => (
        <li key={item.id}>
          <input
            type='checkbox'
            checked={item.done}
            onChange={e => {
              onToogleTodo(item.id, e.target.checked);
            }}
          />
          <span>{item.done ? <del>{item.text}</del> : item.text}</span>
          <button type='button' onClick={() => onDelete(item.id)}>
            X
          </button>{' '}
        </li>
      ))}
    </ul>
  );
}
