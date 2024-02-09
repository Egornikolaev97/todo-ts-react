import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO, EDIT_TODO } from '../../types/actionTypes';
import { TodoActionTypes } from '../../redux/actions/todoActions';
import { ITodo } from '../../types/data';

const initialState: {todos: ITodo[]} = {
  todos: [],
};

const todosReducer = (state = initialState, action: TodoActionTypes) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [action.payload, ...state.todos],
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload),
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload ? { ...todo, complete: !todo.complete } : todo
        ),
      };
    case EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload.id ? { ...todo, title: action.payload.title } : todo
        ),
      };
    default:
      return state;
  }
};

export default todosReducer;
