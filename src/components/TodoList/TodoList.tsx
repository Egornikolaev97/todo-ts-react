import { TodoItem } from '../TodoItem/TodoItem';
import { ITodo } from '../../types/data';
import './TodoList.scss'

interface ITodoListProps {
  items: ITodo[];
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
  editTodo: (id: number, newText: string) => void;
}

const TodoList: React.FC<ITodoListProps> = (props) => {
  const { toggleTodo, removeTodo, editTodo } = props;
  return (
    <div className='todolist'>
      {props.items.map((todo) => (
        <TodoItem
          key={todo.id}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
          editTodo={editTodo}
          {...todo}
        />
      ))}
    </div>
  );
};

export { TodoList };
