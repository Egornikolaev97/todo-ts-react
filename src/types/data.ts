export interface ITodo {
    id: number;
    title: string;
    complete: boolean;
    date: string;
    time: string;
}

export interface TodoSearchProps {
    onSearch: (query: string) => void
}

export interface TodoSortProps {
    sortTodosByName: () => void;
    sortTodosByNameDescending: () => void;
    sortTodosByTime: () => void;
    sortTodosByTimeDescending: () => void;
    handleCloseMenu: () => void;
    activeSort: string;
}

export interface TodoOptionProps {
    showAllTodos: () => void;
    showCompletedTodos: () => void;
    removeCompletedTodos: () => void;
    handleRemoveAllTodos: () => void;
    activeSort: string;
}