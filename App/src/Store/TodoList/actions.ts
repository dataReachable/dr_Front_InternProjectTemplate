/**
 * @file
 * @date 2021/05/12 15:52
 * @author xiongwen
 * @lastModify xiongwen 2021/--/-- --:--
 */

import * as types from './types';

/**
 * 创建一个 CHANGE_INPUTTEXT Action
 * @param {string} inputText - 文本框输入的文本
 * @returns {ToDoListActionTypes} - 返回一个 Actin 实列
 */
export const inputTextChangeAction = (inputText:string):types.ToDoListActionTypes => ({
    type: types.ACTION_TYPE.CHANGE_INPUTTEXT,
    payload: {
        inputText,
    },
});

/**
 * 创建一个 CHANGE_INPUTTEXT Action
 * @returns {ToDoListActionTypes} - 返回一个 Actin 实列
 */
export const createTodoListItemAction = ():types.ToDoListActionTypes => ({
    type: types.ACTION_TYPE.CREATE_TODOLIST_ITEM,
});

/**
 * 创建一个 CHANGE_INPUTTEXT Action
 * @returns {ToDoListActionTypes} - 返回一个 Actin 实列
 */
export const deleteTodoListItemAction = ():types.ToDoListActionTypes => ({
    type: types.ACTION_TYPE.DELETE_TODOLIST_ITEM,
});

/**
 * 创建一个 CHANGE_INPUTTEXT Action
 * @param {number} selected - 选中的 Item 所在数组的下标
 * @returns {ToDoListActionTypes} - 返回一个 Actin 实列
 */
export const selectedNewItemAction = (selected:number):types.ToDoListActionTypes => ({
    type: types.ACTION_TYPE.SELECTED_NEW_ITEM,
    payload: {
        selected,
    },
});

/**
 * 创建一个 CHANGE_INPUTTEXT Action
 * @returns {ToDoListActionTypes} - 返回一个 Actin 实列
 */
export const toggleEditableAction = ():types.ToDoListActionTypes => ({
    type: types.ACTION_TYPE.TOGGLE_EDITABLE,
})

/**
 * 创建一个 CHANGE_INPUTTEXT Action
 * @param {string} inputText - 文本框输入的文本
 * @returns {ToDoListActionTypes} - 返回一个 Actin 实列
 */
export const itemValueChangeAction = (inputText:string):types.ToDoListActionTypes => ({
    type: types.ACTION_TYPE.CHANGE_ITEM_VALUE,
    payload: {
        inputText,
    },
})