import * as actionTypes from '../../types/actionTypes';
import { AddTodoAction, RemoveTodoAction, ToggleTodoAction, EditTodoAction } from '../../types/actions';
import { ITodo } from '../../types/data';

export const addTodo = (todo: ITodo): AddTodoAction => ({
    type: actionTypes.ADD_TODO,
    payload: todo,
  });

  export const removeTodo = (id: number): RemoveTodoAction => ({
    type: actionTypes.REMOVE_TODO,
    payload: id,
  });

  export const toggleTodo = (id: number): ToggleTodoAction => ({
    type: actionTypes.TOGGLE_TODO,
    payload: id,
  });

  export const editTodo = (id: number, title: string): EditTodoAction => ({
    type: actionTypes.EDIT_TODO,
    payload: { id, title },
  });

  export type TodoActionTypes = AddTodoAction | RemoveTodoAction | ToggleTodoAction | EditTodoAction;