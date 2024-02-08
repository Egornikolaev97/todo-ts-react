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
<<<<<<< HEAD
    handleCloseMenu: () => void;
    activeSort: string;
}

export interface TodoOptionProps {
    showAllTodos: () => void;
    showCompletedTodos: () => void;
    removeCompletedTodos: () => void;
    handleRemoveAllTodos: () => void;
    activeSort: string;
=======
    showAllTodos: () => void;
    showCompletedTodos: () => void;
    removeCompletedTodos: () => void;
>>>>>>> 3469b08 (создал репозеторий(только сейчас))
}