/**
 * @file todo reducer
 * @date 2021-05-20
 * @author lidaoping
 * @lastModify lidaoping 2021-05-20
 */

import * as constants from './constants';
import * as types from "./types";

/**
 * 初始 state 数据
 * @constant
 * @type {types.ITodoType[]}
 */
const initState: types.ITodoType[] = [
    {
        id: 1,
        text: '示例文字1',
        editing: false
    }, 
    {
        id: 2,
        text: '示例文字2',
        editing: false
    }, 
    {
        id: 3,
        text: '示例文字3',
        editing: false
    }, 
    {
        id: 4,
        text: '示例文字4',
        editing: false
    }, 
    {
        id: 5,
        text: '示例文字5',
        editing: false
    }
];

/**
 * 根据不同类型的 todo action 执行不同的操作，返回一个新的 state
 * @param {types.ITodoType[]} state 状态
 * @param {types.ITodoActionType} action 操作类型
 * @returns {types.ITodoType[]} 返回一个新的 state，state 改变并且重新渲染页面，如果 action 都不匹配，则返回原始 state，数据并变化而不重新渲染 
 */
const reducer = (state: types.ITodoType[] = initState, action: types.ITodoActionType): types.ITodoType[] => {
    switch (action.type) {
        case constants.ACTION_TYPE.ADD: 
            return [...state, action.payload];
        case constants.ACTION_TYPE.REMOVE: {
            const index = state.findIndex(value => value.id === action.payload.id);
            if (index != -1) {
                state.splice(index, 1);
            }
            return [...state];
        }
        case constants.ACTION_TYPE.UPDATE: {
            const todo = action.payload;
            state.forEach(value => {
                if (value.id === todo.id) {
                    value.text = todo.text;
                }
            });
            return [...state];
        }
        default: 
            return state;
    }
};

export default reducer;