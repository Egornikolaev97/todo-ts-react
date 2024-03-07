import { TodoItem } from '../TodoItem/TodoItem';
import { ITodo } from '../../types/data';
import './TodoList.scss'

interface ITodoListProps {
  items: ITodo[];
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
  editTodo: (id: number, newText: string) => void;
}

const TodoList: React.FC<ITodoListProps> = (props) => {
  const { removeTodo, editTodo, toggleTodo } = props;
  return (
    <div className='todolist'>
      {props.items.map((todo) => (
        <TodoItem
        key={todo.id}
        editTodo={editTodo}
        removeTodo={removeTodo}
        toggleTodo={toggleTodo}
        {...todo}
      />
      ))}
    </div>
  );
};

export { TodoList };
