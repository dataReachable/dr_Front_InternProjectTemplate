interface TodoType {
    id: number;
    content: string;
    completed: boolean;
}
interface TodoListReducer {
    todoList: Array<TodoType>;
}

interface TodoListActionType {
    type: ACTION_TYPES;
    payload: TodoType | Array<TodoType> | number;
}

export type { TodoType, TodoListReducer, TodoListActionType };

export enum ACTION_TYPES {
    ADD_TODO_ITEM = 'ADD_TODO_ITEM',
    REMOVE_TODO_ITEMS = 'REMOVE_TODO_ITEMS',
    CHANGE_TODO_COMPLETE = 'CHANGE_TODO_COMPLETE',
}
