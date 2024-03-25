import { TodoOptionProps } from '../../types/data';
import './TodoOptions.scss';

const TodoOptions: React.FC<TodoOptionProps> = (props) => {
  const {
    showAllTodos,
    showCompletedTodos,
    removeCompletedTodos,
    removeAllTodos,
    activeOptions,
  } = props;

  return (
    <div className='todo-options'>
      <button
        className={`todo-options__btn ${
          activeOptions === 'show-all' ? 'todo-options__btn_active' : ''
        }`}
        onClick={showAllTodos}
      >
        show all
      </button>
      <button
        className={`todo-options__btn ${
          activeOptions === 'show-completed' ? 'todo-options__btn_active' : ''
        }`}
        onClick={showCompletedTodos}
      >
        show completed
      </button>
      <button className='todo-options__btn' onClick={removeCompletedTodos}>
        clear completed
      </button>
      <button className='todo-options__btn' onClick={removeAllTodos}>
        Clear all
      </button>
    </div>
  );
};

export { TodoOptions };
