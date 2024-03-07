export interface ITodo {
  id: number;
  title: string;
  complete: boolean;
  date: string;
  time: string;
}

export interface TodoSearchProps {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
}

export interface TodosState {
  todos: ITodo[];
}

export interface TodoSortProps {
  sortByNameAscending: () => void;
  sortByNameDescending: () => void;
  sortByTimeAscending: () => void;
  sortByTimeDescending: () => void;
  handleCloseMenu: () => void;
  activeSort: string;
}

export interface TodoOptionProps {
  showAllTodos: () => void;
  showCompletedTodos: () => void;
  removeCompletedTodos: () => void;
  removeAllTodos: () => void;
  activeOptions: string;
}