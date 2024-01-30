import { TodoOptionProps } from '../../types/data';
import './TodoOptions.scss';

const TodoOptions: React.FC<TodoOptionProps> = (props) => {
  const {
    showAllTodos,
    showCompletedTodos,
    removeCompletedTodos,
    handleRemoveAllTodos,
    activeSort,
  } = props;

  return (
    <div className='todo-options'>
      <button
        className={`todo-options__btn ${
          activeSort === 'show-all' ? 'todo-options__btn_active' : ''
        }`}
        onClick={showAllTodos}
      >
        show all
      </button>
      <button
        className={`todo-options__btn ${
          activeSort === 'show-completed' ? 'todo-options__btn_active' : ''
        }`}
        onClick={showCompletedTodos}
      >
        show completed
      </button>
      <button
        className={`todo-options__btn ${
          activeSort === 'remove-completed' ? 'todo-options__btn_active' : ''
        }`}
        onClick={removeCompletedTodos}
      >
        clear Completed
      </button>
      <button
        className={`todo-options__btn ${
          activeSort === 'remove-all' ? 'todo-options__btn_active' : ''
        }`}
        onClick={handleRemoveAllTodos}
      >
        Clear all
      </button>
    </div>
  );
};

export { TodoOptions };
