import * as types from './actionTypes';

const addTodoItemAction = (todo: types.TodoType): types.TodoListActionType => ({
    type: types.ACTION_TYPES.ADD_TODO_ITEM,
    payload: todo,
});

const removeTodoItemsAction = (id: number): types.TodoListActionType => ({
    type: types.ACTION_TYPES.REMOVE_TODO_ITEMS,
    payload: id,
});

const changeTodoCompleteAction = (id: number): types.TodoListActionType => ({
    type: types.ACTION_TYPES.CHANGE_TODO_COMPLETE,
    payload: id,
});

export { addTodoItemAction, removeTodoItemsAction, changeTodoCompleteAction };
