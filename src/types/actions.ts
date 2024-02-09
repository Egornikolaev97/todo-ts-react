import { ITodo } from './data';
import * as actionTypes from './actionTypes';

export interface AddTodoAction {
  type: typeof actionTypes.ADD_TODO;
  payload: ITodo;
}

export interface RemoveTodoAction {
  type: typeof actionTypes.REMOVE_TODO;
  payload: number;
}

export interface ToggleTodoAction {
  type: typeof actionTypes.TOGGLE_TODO;
  payload: number;
}

export interface EditTodoAction {
  type: typeof actionTypes.EDIT_TODO;
  payload: { id: number; title: string };
}

