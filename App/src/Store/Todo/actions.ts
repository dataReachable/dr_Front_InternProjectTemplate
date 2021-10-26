import ActionTypes from './actionTypes';

/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
export interface Action {
    type: string;
    payload: Todo;
}

export interface Todo {
    id: number;
    text: string;
}
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */

export const addTodoAction = (todo: Todo): Action => ({
    type: ActionTypes.ADD_TODO,
    payload: todo,
});

export const removeTodo = (todo: Todo): Action => ({
    type: ActionTypes.REMOVE_TODO,
    payload: todo,
});

export const selectTodo = (todo: Todo): Action => ({
    type: ActionTypes.SELECT_TODO,
    payload: todo,
});

export const editTodo = (todo: Todo): Action => ({
    type: ActionTypes.EDIT_TODO,
    payload: todo,
});
