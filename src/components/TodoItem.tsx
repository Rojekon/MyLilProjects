import { ITodo } from "../types/data";

interface ITodoItem extends ITodo {
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoItem: React.FC<ITodoItem> = (props) => {
  const { id, title, complete, deleteTodo, toggleTodo } = props;
  return (
    <div>
      <input
        type="checkbox"
        checked={complete}
        onChange={() => toggleTodo(id)}
      ></input>
      {title}
      <button onClick={() => deleteTodo(id)}>X</button>
    </div>
  );
};

export { TodoItem };
