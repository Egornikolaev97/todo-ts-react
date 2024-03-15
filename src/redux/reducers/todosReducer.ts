import {
  ADD_TODO,
  REMOVE_TODO,
  EDIT_TODO,
  TOGGLE_TODO,
  REMOVE_ALL,
  REMOVE_COMPLETED,
  SET_FILTER,
  SHOW_ALL,
  SHOW_COMPLETED,
  SORT_BY_NAME_ASCENDING,
  SORT_BY_NAME_DESCENDING,
  SORT_BY_TIME_ASCENDING,
  SORT_BY_TIME_DESCENDING,
  REORDER_TODO_ITEMS,
  TodoActionTypes,
} from '../../types/actionTypes';
import { ITodo } from '../../types/data';

type SortTodoState = {
  sortOrder: string;
  filter: string;
  todos: ITodo[];
};

const initialState: SortTodoState = {
  sortOrder: 'asc',
  filter: 'all',
  todos: [],
};

const todoReducer = (
  state = initialState,
  action: TodoActionTypes
): SortTodoState => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, title: action.payload.newText }
            : todo
        ),
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, complete: !todo.complete }
            : todo
        ),
      };
      case REORDER_TODO_ITEMS: {
        const { startIndex, endIndex } = action.payload;
        const newTodos = Array.from(state.todos);
        const [removed] = newTodos.splice(startIndex, 1);
        newTodos.splice(endIndex, 0, removed);

        return {
          ...state,
          todos: newTodos,
        };
      }
    case REMOVE_COMPLETED:
      return {
        ...state,
        todos: state.todos.filter((todo) => !todo.complete),
      };
    case REMOVE_ALL:
      return {
        ...state,
        todos: [],
      };
    case SET_FILTER:
    case SHOW_ALL:
    case SHOW_COMPLETED:
      const filterValue =
        action.type === SET_FILTER
          ? action.payload
          : action.type === SHOW_ALL
          ? 'all'
          : action.type === SHOW_COMPLETED
          ? 'completed'
          : state.filter;
      return {
        ...state,
        filter: filterValue,
      };
    case SORT_BY_NAME_ASCENDING: {
      const sortedTodosAsc = [...state.todos].sort((a, b) =>
        a.title.toLowerCase().localeCompare(b.title.toLowerCase())
      );
      return {
        ...state,
        todos: sortedTodosAsc,
      };
    }
    case SORT_BY_NAME_DESCENDING: {
      const sortedTodosDesc = [...state.todos].sort((a, b) =>
        b.title.toLowerCase().localeCompare(a.title.toLowerCase())
      );
      return {
        ...state,
        todos: sortedTodosDesc,
      };
    }
    case SORT_BY_TIME_ASCENDING:
      return {
        ...state,
        todos: [...state.todos].sort((a, b) => a.id - b.id),
      };
    case SORT_BY_TIME_DESCENDING:
      return {
        ...state,
        todos: [...state.todos].sort((a, b) => b.id - a.id),
      };
    default:
      return state;
  }
};

export default todoReducer;
