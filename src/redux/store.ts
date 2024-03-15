import { combineReducers } from 'redux';
import todosReducer from './reducers/todosReducer';
import { legacy_createStore as createStore } from 'redux';
import { loadState, saveState } from '../localStorage';

const persistedState = loadState();

export const rootReducer = combineReducers({
  todos: todosReducer,
});

export const store = createStore(rootReducer, persistedState);
export type RootState = ReturnType<typeof rootReducer>;

store.subscribe(() => {
  saveState({
    todos: store.getState().todos,
  });

});
