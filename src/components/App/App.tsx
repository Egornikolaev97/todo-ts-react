import { useState, useEffect } from 'react';
import { TodoList } from '../TodoList/TodoList';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoSort } from '../TodoSort/TodoSort';
import { TodoOptions } from '../TodoOptions/TodoOptions';
import { ITodo, TodosState } from '../../types/data';
import { formatDateTime } from '../../configs/formatDateTime';
import { useSelector, useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { RootState } from '../../redux/store'
import {
  addTodo,
  removeTodo,
  editTodo,
  toggleTodo,
} from '../../redux/actions/todoActions';
import {
  showAllTodos,
  showCompletedTodos,
  removeAllTodos,
  removeCompletedTodos,
  sortByNamesAscending,
  sortByNameDescending,
  sortByTimeAscending,
  sortByTimeDescending,
} from '../../redux/actions/sortActions';
import './App.scss';
import { TodoActionTypes } from '../../types/actionTypes';

const App: React.FC = () => {
  const dispatch: Dispatch<TodoActionTypes> = useDispatch();

  const todos = useSelector((state: { todos: TodosState }) => state.todos.todos);
  const filter = useSelector((state: RootState) => state.todos.filter);

  const [showSortMenu, setShowSortMenu] = useState(false);
  const [activeSort, setActiveSort] = useState('');
  const [activeOptions, setActiveOptions] = useState('show-all');
  const [value, setValue] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const handleAddTodo = () => {
    if (value.trim()) {
      const { date, time } = formatDateTime();
      const newTodo: ITodo = {
        id: Date.now(),
        title: value,
        complete: false,
        date,
        time,
      };
      dispatch(addTodo(newTodo));
      handleShowAll();
      setValue('');
    }
  };

  const handleSearchChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredAndSortedTodos = todos.filter(todo => {
    const matchesFilter = filter === 'all' || (filter === 'completed' ? todo.complete : !todo.complete);
    return matchesFilter && todo.title.toLowerCase().includes(searchQuery.toLowerCase());
  });

  // const filteredAndSortedTodos = todos.filter(todo => {
  //   if (filter === 'all') return true;
  //   return filter === 'completed' ? todo.complete : !todo.complete;
  // });

  const handleToggleTodo = (id: number) => {
    dispatch(toggleTodo(id));
  };

  const handleRemoveTodo = (id: number) => {
    dispatch(removeTodo(id));
  };

  const hadleEditTodo = (id: number, newText: string) => {
    dispatch(editTodo(id, newText));
  };

  const handleShowAll = () => {
    dispatch(showAllTodos());
    setActiveOptions('show-all')
  };

  const handleShowCompleted = () => {
    dispatch(showCompletedTodos());
    setActiveOptions('show-completed')
  };

  const handleRemoveAllTodos = () => {
    dispatch(removeAllTodos());
  };

  const handleRemoveCompletedTodos = () => {
    dispatch(removeCompletedTodos());
  };

  const handleSortByNameAscendign = () => {
    dispatch(sortByNamesAscending());
    setActiveSort('name-asc')
  }

  const handleSortByNameDescending = () => {
    dispatch(sortByNameDescending());
    setActiveSort('name-desc')
  };

  const handleSortByTimeAscendign = () => {
    dispatch(sortByTimeAscending());
    setActiveSort('time-asc')
  }

  const handleSortByTimeDescending = () => {
    dispatch(sortByTimeDescending());
    setActiveSort('time-desc')
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      handleAddTodo();
    }
  };

  const handleClickSort = () => {
    setShowSortMenu(!showSortMenu);
  };

  const handleCloseMenu = () => {
    if (showSortMenu) setShowSortMenu(false);
  };

  return (
    <div className='todo-app' onClick={handleCloseMenu}>
      <div className='todo-app__container'>
        <div className='todo-app__toolbar'>
          <h1 className='todo-app__title'>Todo-list</h1>
          <TodoSearch onChange={handleSearchChange} value={searchQuery}
          />
          <button className='todo-app__sort-btn' onClick={handleClickSort}>
            <div className='todo-app__sort-icon'></div>
          </button>
          {showSortMenu && (
            <TodoSort
              handleCloseMenu={handleCloseMenu}
              sortByNameAscending={handleSortByNameAscendign}
              sortByNameDescending={handleSortByNameDescending}
              sortByTimeAscending={handleSortByTimeAscendign}
              sortByTimeDescending={handleSortByTimeDescending}
              activeSort={activeSort}
            />
          )}
        </div>
        <div className='todo-app__add-task' onKeyDown={handleKeyDown}>
          <button
            className='todo-app__add-btn'
            onClick={handleAddTodo}
          >
            +
          </button>
          <input
            className='todo-app__add-input'
            type='text'
            maxLength={30}
            value={value}
            onChange={handleChange}
            placeholder='Add task!'
          />
        </div>
        <TodoOptions
          showAllTodos={handleShowAll}
          showCompletedTodos={handleShowCompleted}
          removeCompletedTodos={handleRemoveCompletedTodos}
          removeAllTodos={handleRemoveAllTodos}
          activeOptions={activeOptions}
        />
        <TodoList
          items={filteredAndSortedTodos}
          removeTodo={handleRemoveTodo}
          editTodo={hadleEditTodo}
          toggleTodo={handleToggleTodo}
        />
      </div>
    </div>
  );
};

export default App;
