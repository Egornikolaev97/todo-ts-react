import { useEffect, useRef } from 'react';
import { TodoSortProps } from '../../types/data';
import './TodoSort.scss';

const TodoSort: React.FC<TodoSortProps> = (props) => {
  const {
    sortTodosByName,
    sortTodosByNameDescending,
    sortTodosByTime,
    sortTodosByTimeDescending,
    handleCloseMenu,
    activeSort,
  } = props;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleCloseMenu();
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleCloseMenu]);

  const handleClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
  };

  return (
    <div className='todo-sort' onClick={handleClick}>
      <button
        className={`todo-sort__btn ${
          activeSort === 'name-ascending' ? 'todo-sort__btn_active' : ''
        }`}
        onClick={sortTodosByName}
      >
        name
        <div className='todo-sort__icon todo-sort__icon_name-ascending'></div>
      </button>
      <button
        className={`todo-sort__btn ${
          activeSort === 'name-descending' ? 'todo-sort__btn_active' : ''
        }`}
        onClick={sortTodosByNameDescending}
      >
        name
        <div className='todo-sort__icon todo-sort__icon_name-descending'></div>
      </button>
      <button
        className={`todo-sort__btn ${
          activeSort === 'time-ascending' ? 'todo-sort__btn_active' : ''
        }`}
        onClick={sortTodosByTime}
      >
        time
        <div className='todo-sort__icon todo-sort__icon_time-ascending'></div>
      </button>
      <button
        className={`todo-sort__btn ${
          activeSort === 'time-descending' ? 'todo-sort__btn_active' : ''
        }`}
        onClick={sortTodosByTimeDescending}
      >
        time
        <div className='todo-sort__icon todo-sort__icon_time-descending'></div>
      </button>
    </div>
  );
};

export { TodoSort };
