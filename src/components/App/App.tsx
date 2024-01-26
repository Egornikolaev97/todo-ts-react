import { useState } from 'react';
import { TodoList } from '../TodoList/TodoList';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoSort } from '../TodoSort/TodoSort';
import { ITodo } from '../../types/data';
import './App.scss';

const App: React.FC = () => {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [filteredTodos, setFilteredTodos] = useState<ITodo[]>([]);
  const [showCompletedOnly, setShowCompletedOnly] = useState(false);

  // Handle input change for the new todo:
  // Updates the state with the current value of the input field
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  // Handle key down event in the input field: Adds a new todo when the 'Enter' key is pressed
  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  // Formatting date and time according to Russian standards
  // DD.MM.YYYY HH:MM
  const formatDateTime = () => {
    const currentDate = new Date();
    const formattedDate = `${currentDate
      .getDate()
      .toString()
      .padStart(2, '0')}.${(currentDate.getMonth() + 1)
      .toString()
      // .padStart(2, '0')}.${currentDate.getFullYear().toString().slice(-2)}`;
      .padStart(2, '0')}.${currentDate.getFullYear()}`;
    const formattedTime = `${currentDate
      .getHours()
      .toString()
      .padStart(2, '0')}:${currentDate
      .getMinutes()
      .toString()
      .padStart(2, '0')}`;
    return { date: formattedDate, time: formattedTime };
  };

  //Sorting by Name
  const sortTodosByName = () => {
    const sorted = [...todos].sort((a, b) => {
      return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
    });
    setTodos(sorted);
    if (!showCompletedOnly) {
      setFilteredTodos(sorted);
    } else {
      setFilteredTodos(sorted.filter((todo) => todo.complete));
    }
  };

  //Sorting by Name(descending)
  const sortTodosByNameDescending = () => {
    const sorted = [...todos].sort((a, b) => {
      return b.title.toLowerCase().localeCompare(a.title.toLowerCase());
    });
    setTodos(sorted);
    if (!showCompletedOnly) {
      setFilteredTodos(sorted);
    } else {
      setFilteredTodos(sorted.filter((todo) => todo.complete));
    }
  };

  //Sorting by Time(default)
  const sortTodosByTime = () => {
    const sorted = [...todos].sort((a, b) => a.id - b.id);
    setTodos(sorted);
    if (!showCompletedOnly) {
      setFilteredTodos(sorted);
    } else {
      setFilteredTodos(sorted.filter((todo) => todo.complete));
    }
  };

  //Sorting by Time(descending)
  const sortTodosByTimeDescending = () => {
    const sorted = [...todos].sort((a, b) => b.id - a.id);
    setTodos(sorted);
    if (!showCompletedOnly) {
      setFilteredTodos(sorted);
    } else {
      setFilteredTodos(sorted.filter((todo) => todo.complete));
    }
  };

  // Showing all todos
  const showAllTodos = () => {
    setFilteredTodos([...todos]);
    setShowCompletedOnly(false);
  };

  // Showing only completed todos
  const showCompletedTodos = () => {
    const completed = todos.filter((todo) => todo.complete);
    setFilteredTodos(completed);
    setShowCompletedOnly(true);
  };

  // Adding todo
  const addTodo = () => {
    if (value) {
      const { date, time } = formatDateTime();
      const newTodo = {
        id: Date.now(),
        title: value,
        complete: false,
        date,
        time,
      };
      setTodos((prevTodos) => [newTodo, ...prevTodos]);
      if (filteredTodos.length > 0) {
        setFilteredTodos((prevFilteredTodos) => [
          newTodo,
          ...prevFilteredTodos,
        ]);
      }
      setValue('');
    }
  };

  // Removing todo
  const removeTodo = (id: number): void => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    setFilteredTodos((prevFilteredTodos) =>
      prevFilteredTodos.filter((todo) => todo.id !== id)
    );
  };

  // Removing only completed totos
  const removeCompletedTodos = () => {
    setTodos(todos.filter((todo) => !todo.complete));
    setFilteredTodos(filteredTodos.filter((todo) => !todo.complete));
  };

  // Toggling todo (make task as completed)
  const toggleTodo = (id: number): void => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id !== id) return todo;
        return {
          ...todo,
          complete: !todo.complete,
        };
      })
    );
    setFilteredTodos((prevFilteredTodos) =>
      prevFilteredTodos.map((todo) => {
        if (todo.id !== id) return todo;
        return {
          ...todo,
          complete: !todo.complete,
        };
      })
    );
  };

  // Searching todos (dynamic searching)
  const handleSearch = (query: string) => {
    const filteredTodos = todos.filter((todo) =>
      todo.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredTodos(filteredTodos);
  };

  // Editing todo
  const editTodo = (id: number, newText: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, title: newText } : todo
      )
    );
    setFilteredTodos((prevFilteredTodos) =>
      prevFilteredTodos.map((todo) =>
        todo.id === id ? { ...todo, title: newText } : todo
      )
    );
  };

  return (
    <div className='todo-app'>
      <div className='todo-app__container'>
        <h1 className='todo-app__title'>Add a task!</h1>
        {/* <TodoSearch onSearch={handleSearch} /> */}
        <div className='todo-app__add-task'>
          <button className='todo-app__add-btn' onClick={addTodo}>
            +
          </button>
          <input
            className='todo-app__add-input'
            type='text'
            maxLength={30}
            value={value}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder='Add task!'
          />
        </div>
        <div className='todo-sort'>
          <TodoSort
            sortTodosByName={sortTodosByName}
            sortTodosByNameDescending={sortTodosByNameDescending}
            sortTodosByTime={sortTodosByTime}
            sortTodosByTimeDescending={sortTodosByTimeDescending}
            showAllTodos={showAllTodos}
            showCompletedTodos={showCompletedTodos}
            removeCompletedTodos={removeCompletedTodos}
          />
        </div>
        <TodoList
          items={filteredTodos.length ? filteredTodos : todos}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
          editTodo={editTodo}
        />
      </div>
    </div>
  );
};

export default App;
