import {
  SET_FILTER,
  SET_SORT_ORDER,
  SHOW_ALL,
  SHOW_COMPLETED,
  REMOVE_COMPLETED,
  REMOVE_ALL,
  ShowAllTodosAction,
  SetFilterAction,
  RemoveCompletedTodosAction,
  ShowCompletedTodosAction,
  RemoveAllTodosAction,
  SetSortOrderAction,
  SORT_BY_NAME_ASCENDING,
  SORT_BY_NAME_DESCENDING,
  SORT_BY_TIME_ASCENDING,
  SORT_BY_TIME_DESCENDING,
  SortByNameAscending,
  SortByNameDescending,
  SortByTimeAscending,
  SortByTimeDescending,
} from '../../types/actionTypes';

export const setSortOrder = (sortOrder: string): SetSortOrderAction => ({
  type: SET_SORT_ORDER,
  payload: sortOrder,
});

export const setFilter = (filter: string): SetFilterAction => ({
  type: SET_FILTER,
  payload: filter,
});

export const showAllTodos = (): ShowAllTodosAction => ({
type: SHOW_ALL,
});

export const showCompletedTodos = (): ShowCompletedTodosAction => ({
type: SHOW_COMPLETED,
});

export const removeCompletedTodos = (): RemoveCompletedTodosAction => ({
type: REMOVE_COMPLETED,
});

export const removeAllTodos = (): RemoveAllTodosAction => ({
type: REMOVE_ALL,
});

export const sortByNamesAscending = (): SortByNameAscending => ({
  type: SORT_BY_NAME_ASCENDING,
});

export const sortByNameDescending = (): SortByNameDescending => ({
  type: SORT_BY_NAME_DESCENDING,
});

export const sortByTimeAscending = (): SortByTimeAscending => ({
  type: SORT_BY_TIME_ASCENDING,
});

export const sortByTimeDescending = (): SortByTimeDescending => ({
  type: SORT_BY_TIME_DESCENDING,
});
