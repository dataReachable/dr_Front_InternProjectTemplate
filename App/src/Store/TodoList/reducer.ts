/**
 * @file todo reducer
 * @date 2021-05-20
 * @author lidaoping
 * @lastModify lidaoping 2021-05-20
 */

import * as types from './types';

/**
 * 初始 state 数据
 * @constant
 * @type {types.ITodoType[]}
 */
const initState: types.ITodoType[] = [
    {
        id: 1,
        text: '示例文字1',
    },
    {
        id: 2,
        text: '示例文字2',
    },
    {
        id: 3,
        text: '示例文字3',
    },
    {
        id: 4,
        text: '示例文字4',
    },
    {
        id: 5,
        text: '示例文字5',
    },
    {
        id: 6,
        text: '示例文字6',
    },
    {
        id: 7,
        text: '示例文字6',
    },
    {
        id: 8,
        text: '示例文字6',
    },
];

/**
 * 根据不同类型的 todo action 执行不同的操作，返回一个新的 state
 * @param {types.ITodoType[]} state 状态
 * @param {types.ITodoActionType} action 操作类型
 * @returns {types.ITodoType[]} 返回一个新的 state，state 改变并且重新渲染页面，如果 action 都不匹配，则返回原始 state，数据并变化而不重新渲染
 */
const reducer = (
    state: types.ITodoType[] = initState,
    action: types.IActionType,
): types.ITodoType[] => {
    switch (action.type) {
        case types.TODO_ACTION_TYPE.ADD: {
            // 给 ITodoActionType 添加 id，id 值为数组中 id 最大数 + 1
            const ids = state.length !== 0 ? state.map((val) => val.id) : [-1, 0];
            action.payload.data.id = Math.max(...ids) + 1;

            return [...state, action.payload.data];
        }
        case types.TODO_ACTION_TYPE.REMOVE: {
            console.log('REMOVE', action);
            const index = state.findIndex((value) => value.id === action.payload.id);
            if (index != -1) {
                state.splice(index, 1);
            }
            return [...state];
        }
        case types.TODO_ACTION_TYPE.UPDATE: {
            const todo = action.payload;
            state.forEach((value) => {
                if (value.id === todo.data.id) {
                    value.text = todo.data.text;
                }
            });
            return [...state];
        }
        default: {
            console.log('default');
            return state;
        }
    }
};

export default reducer;
