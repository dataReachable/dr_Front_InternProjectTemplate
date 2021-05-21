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
const addTodoItemAction = (todo: types.TodoType): types.TodoListActionTypes => ({
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
const changeTodoCompleteAction = (id: number): types.TodoListActionTypes => ({
    type: types.ACTION_TYPES.CHANGE_TODO_COMPLETE,
    payload: id,
});
/**
 * This action will change a item and will change the todolist
 * @param {number} id  change the item's completed by id
 */
const changeTodoContentAction = (todo: types.TodoType): types.TodoListActionTypes => ({
    type: types.ACTION_TYPES.CHANGE_TODO_CONTENT,
    payload: todo,
});

/**
 * 延迟两秒删除一个待办项
 * @param id 要延迟2秒删除的待办项id
 */
const removeTodoItemsAsync = (id: number): types.TodoListActionTypes => ({
    type: types.ACTION_TYPES.REMOVE_TODO_ITEMS_ASYNC,
    payload: id,
});

export {
    addTodoItemAction,
    removeTodoItemsAction,
    changeTodoCompleteAction,
    changeTodoContentAction,
    removeTodoItemsAsync,
};
