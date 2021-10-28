/**
 * @file actions
 * @date 2021-10-27
 * @author kezezheng
 * @lastModify kezezheng 2021-10-27
 */

import { ActionTypes, Todo, Action } from './actionTypes';

/**
 * 添加todo的 action creator
 * @param todo 待添加的todo
 * @returns {Action} 添加todo的action
 */
export const addTodoAction = (todo: Todo): Action => ({
    type: ActionTypes.ADD_TODO,
    payload: todo,
});

/**
 * 移除todo的 action creator
 * @param todo 待移除的todo
 * @returns {Action} 移除todo的action
 */
export const removeTodoAction = (todo: Todo): Action => ({
    type: ActionTypes.REMOVE_TODO,
    payload: todo,
});

/**
 * 选中todo的 action creator
 * @param todo 待选中的todo
 * @returns {Action} 选中todo的action
 */
export const selectTodoAction = (todo: Todo): Action => ({
    type: ActionTypes.SELECT_TODO,
    payload: todo,
});

/**
 * 编辑todo的 action creator
 * @param todo 待编辑的todo
 * @returns {Action} 编辑todo的action
 */
export const editTodoAction = (todo: Todo): Action => ({
    type: ActionTypes.EDIT_TODO,
    payload: todo,
});

/**
 * 异步添加todo的 action creator
 * @returns 异步添加todo的 action
 */
export const addTodoAsyncAction = (todo: Todo): Action => ({
    type: ActionTypes.ADD_TODO_ASYNC,
    payload: todo,
});

/**
 * 异步移除todo的 action creator
 * @returns 异步移除todo的 action
 */
export const removeTodoAsyncAction = (todo: Todo): Action => ({
    type: ActionTypes.REMOVE_TODO_ASYNC,
    payload: todo,
});
