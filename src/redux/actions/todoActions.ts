import {
  ADD_TODO,
  REMOVE_TODO,
  EDIT_TODO,
  TOGGLE_TODO,
  RemoveTodoAction,
  AddTodoAction,
  EditTodoAction,
  ToggleTodoAction,
  ReorderTodoItemsAction,
} from '../../types/actionTypes';
import { ITodo } from '../../types/data';

export const addTodo = (todo: ITodo): AddTodoAction => ({
  type: ADD_TODO,
  payload: todo,
});

export const removeTodo = (id: number): RemoveTodoAction => ({
  type: REMOVE_TODO,
  payload: id,
});

export const editTodo = (id: number, newText: string): EditTodoAction => ({
  type: EDIT_TODO,
  payload: { id, newText },
});

export const toggleTodo = (id: number): ToggleTodoAction => ({
  type: TOGGLE_TODO,
  payload: id,
});

export const reorderTodoItems = (
  startIndex: number,
  endIndex: number
): ReorderTodoItemsAction => ({
  type: 'REORDER_TODO_ITEMS',
  payload: { startIndex, endIndex },
});
