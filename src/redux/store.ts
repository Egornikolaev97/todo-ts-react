import { combineReducers } from 'redux';
import todosReducer from './reducers/todosReducer';
import { legacy_createStore as createStore } from 'redux';


export const rootReducer = combineReducers({
    todos: todosReducer,
});
export const store = createStore(
    rootReducer,
  );

export type RootState = ReturnType<typeof rootReducer>;
