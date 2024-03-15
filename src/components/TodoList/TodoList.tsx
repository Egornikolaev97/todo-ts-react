import { TodoItem } from '../TodoItem/TodoItem';
import { ITodo } from '../../types/data';
import { Droppable } from 'react-beautiful-dnd';
import './TodoList.scss';

interface ITodoListProps {
  items: ITodo[];
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
  editTodo: (id: number, newText: string) => void;
}

console.log("Rendering Droppable with id droppable-todos");

const TodoList: React.FC<ITodoListProps> = (props) => {
  const { removeTodo, editTodo, toggleTodo } = props;
  return (
    <Droppable droppableId='droppable-todos'>
      {(provided) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className='todolist'
        >
          {props.items.map((todo, index) => (
              <TodoItem
              key={todo.id}
              editTodo={editTodo}
              removeTodo={removeTodo}
              toggleTodo={toggleTodo}
              index={index}
              {...todo}
            />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export { TodoList };
