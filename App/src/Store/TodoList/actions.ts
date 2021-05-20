/**
 * @file actions.ts
 * @date 2021-05-20
 * @author zhou chengzhi
 * @lastModify zhou chengzhi 2021-05-20
 */
import * as types from './actionTypes';

/**
 * This action will add a new item and will change the todolist
 * @param {TodoType} todo a new item
 */
const addTodoItemAction = (todo: types.TodoType): types.TodoListActionType => ({
    type: types.ACTION_TYPES.ADD_TODO_ITEM,
    payload: todo,
});
/**
 * This action will remove a item and will change the todolist
 * @param {number} id item delete by id
 */
const removeTodoItemsAction = (id: number): types.TodoListActionType => ({
    type: types.ACTION_TYPES.REMOVE_TODO_ITEMS,
    payload: id,
});
/**
 * This action will change a item and will change the todolist
 * @param {number} id  change the item's completed by id
 */
const changeTodoCompleteAction = (id: number): types.TodoListActionType => ({
    type: types.ACTION_TYPES.CHANGE_TODO_COMPLETE,
    payload: id,
});

export { addTodoItemAction, removeTodoItemsAction, changeTodoCompleteAction };
