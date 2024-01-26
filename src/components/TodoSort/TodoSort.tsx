import { TodoSortProps } from '../../types/data';
import './TodoSort.scss';

const TodoSort: React.FC<TodoSortProps> = (props) => {
  const {
    sortTodosByName,
    sortTodosByNameDescending,
    sortTodosByTime,
    sortTodosByTimeDescending,
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
