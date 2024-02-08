<<<<<<< HEAD
import { useEffect, useRef } from 'react';
=======
>>>>>>> 3469b08 (создал репозеторий(только сейчас))
import { TodoSortProps } from '../../types/data';
import './TodoSort.scss';

const TodoSort: React.FC<TodoSortProps> = (props) => {
  const {
    sortTodosByName,
    sortTodosByNameDescending,
    sortTodosByTime,
    sortTodosByTimeDescending,
<<<<<<< HEAD
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
=======
    showAllTodos,
    showCompletedTodos,
    removeCompletedTodos,
  } = props;

  return (
    <div className='todo-sort__container'>
      <span>sort by: </span>
        <button className="todo-sort__btn" onClick={sortTodosByName}>name ^</button>
        <button className="todo-sort__btn" onClick={sortTodosByNameDescending}>name</button>
        <button className="todo-sort__btn" onClick={sortTodosByTime}>time</button>
        <button className="todo-sort__btn" onClick={sortTodosByTimeDescending}>Default</button>
        <button className="todo-sort__btn" onClick={showAllTodos}>all</button>
        <button className="todo-sort__btn" onClick={showCompletedTodos}>completed</button>
        <button className="todo-sort__btn" onClick={removeCompletedTodos}>Remove Completed Tasks</button>
    </div>
  )
};

export {TodoSort}
>>>>>>> 3469b08 (создал репозеторий(только сейчас))
