/**
 * @file
 * @date 2021/05/12 15:52
 * @author xiongwen
 * @lastModify xiongwen 2021/--/-- --:--
 */

import * as types from './types';

/**
 * 定义初始状态
 * @constant
 * @type {TodoListReducer}
 *
 */
const initialState: types.TodoListReducer = {
    inputText: '',
    selected: 0,
    items: [
        '1. 输入框点击 Enter 可以快速创建 Item',
        '2. 如果没有选中 Item，则总是删除第一个',
        '3. 双击一个 Item， 可以修改该 Item 的值'
    ],
    editable: false,
}

/**
 * 处理每一个 Action 类型
 * @param {TodoListReducer} state - 当前的 state
 * @param {ToDoListActionTypes} action - 收到的 action 对象
 * @returns {TodoListReducer} - 返回一个新的 state
 */
const TodoListReducer = (state = initialState, action:types.ToDoListActionTypes):types.TodoListReducer => {
    switch (action.type) {
        case types.ACTION_TYPE.CHANGE_INPUTTEXT:
            return (
                {
                    ...state,
                    inputText: action.payload.inputText,
                }
            );
        case types.ACTION_TYPE.CREATE_TODOLIST_ITEM:
            if (state.inputText === '') {
                return state;
            } else {
                const newCreatedItems = state.items.slice();
                newCreatedItems.push(state.inputText);
                return (
                    {
                        ...state,
                        inputText: '',
                        items: newCreatedItems,
                    }
                );
            }
        case types.ACTION_TYPE.DELETE_TODOLIST_ITEM:
            if (state.items[state.selected] !== undefined)
            {
                const newDeletedItems = state.items.slice();
                newDeletedItems.splice(state.selected, 1);
                return ({
                    ...state,
                    selected: 0,
                    items: newDeletedItems,
                });
            } else {
                return state;
            }
        case types.ACTION_TYPE.SELECTED_NEW_ITEM:
            return ({
                ...state,
                selected: action.payload.selected,
            });
        case types.ACTION_TYPE.TOGGLE_EDITABLE:
            return ({
                ...state,
                editable: !state.editable,
            });
        case types.ACTION_TYPE.CHANGE_ITEM_VALUE:
            if (action.payload.inputText === '') {
                return state;
            } else {
                const itemValueChangedItems = state.items.slice();
                itemValueChangedItems[state.selected] = action.payload.inputText;
                return ({
                    ...state,
                    items: itemValueChangedItems,
                });
            }
        default:
            return state;
    }
}

export default TodoListReducer;