import { ITodo } from './data';
export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_SORT_ORDER = 'SET_SORT_ORDER';
export const SORT_BY_NAME_DESCENDING = 'SORT_BY_NAME_DESCENDING';
export const SORT_BY_NAME_ASCENDING = 'SORT_BY_NAME_ASCENDING';
export const SORT_BY_TIME_DESCENDING = 'SORT_BY_TIME_DESCENDING';
export const SORT_BY_TIME_ASCENDING = 'SORT_BY_TIME_ASCENDING';
export const SET_FILTER = 'SET_FILTER';
export const SHOW_ALL = 'SHOW_ALL';
export const SHOW_COMPLETED = 'SHOW_COMPLETED';
export const REMOVE_COMPLETED = 'REMOVE_COMPLETED';
export const REMOVE_ALL = 'REMOVE_ALL';
export const REORDER_TODO_ITEMS = 'REORDER_TODO_ITEMS';

export interface AddTodoAction {
  type: typeof ADD_TODO;
  payload: ITodo;
}

export interface RemoveTodoAction {
  type: typeof REMOVE_TODO;
  payload: number;
}

export interface EditTodoAction {
  type: typeof EDIT_TODO;
  payload: {
    id: number;
    newText: string;
  };
}

export interface ToggleTodoAction {
  type: typeof TOGGLE_TODO;
  payload: number;
}

export interface SetSortOrderAction {
  type: typeof SET_SORT_ORDER;
  payload: string;
}

export interface SetFilterAction {
  type: typeof SET_FILTER;
  payload: string;
}

export interface ShowAllTodosAction {
  type: typeof SHOW_ALL;
}

export interface ShowCompletedTodosAction {
  type: typeof SHOW_COMPLETED;
}

export interface RemoveCompletedTodosAction {
  type: typeof REMOVE_COMPLETED;
}

export interface RemoveAllTodosAction {
  type: typeof REMOVE_ALL;
}

export interface SortByNameAscending {
  type: typeof SORT_BY_NAME_ASCENDING;
}

export interface SortByNameDescending {
  type: typeof SORT_BY_NAME_DESCENDING;
}

export interface SortByTimeAscending {
  type: typeof SORT_BY_TIME_ASCENDING;
}

export interface SortByTimeDescending {
  type: typeof SORT_BY_TIME_DESCENDING;
}

export interface ReorderTodoItemsAction {
  type: typeof REORDER_TODO_ITEMS;
  payload: {
    startIndex: number;
    endIndex: number;
  };
}

export type TodoActionTypes =
  | AddTodoAction
  | RemoveTodoAction
  | EditTodoAction
  | ToggleTodoAction
  | RemoveCompletedTodosAction
  | RemoveAllTodosAction
  | SetSortOrderAction
  | SetFilterAction
  | ShowAllTodosAction
  | ShowCompletedTodosAction
  | SortByNameAscending
  | SortByNameDescending
  | SortByTimeAscending
  | SortByTimeDescending
  | ReorderTodoItemsAction;
