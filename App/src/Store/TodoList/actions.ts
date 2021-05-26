/**
 * @file todo action
 * @date 2021-05-20
 * @author lidaoping
 * @lastModify lidaoping 2021-05-20
 */

import * as types from './types';

/**
 * 用于做添加操作的 todo action createor
 * @param {types.ITodo} payload todo 待办事项
 * @returns {types.ITodoActionType} 返回一个用于添加的 action
 */
const addAction = (payload: types.ITodoType): types.IAddActionType => {
    return {
        type: types.TODO_ACTION_TYPE.ADD,
        payload: {
            data: payload,
        },
    };
};

/**
 * 用于做删除操作的 todo action createor
 * @param {types.ITodo} payload todo 待办事项
 * @returns {types.ITodoActionType} 返回一个用于删除的 action
 */
const removeAction = (payload: number): types.IRemoveActionType => {
    return {
        type: types.TODO_ACTION_TYPE.REMOVE,
        payload: {
            id: payload,
        },
    };
};

/**
 * 用于做删除操作的 todo action createor
 * @param {types.ITodo} payload todo 待办事项
 * @returns {types.ITodoActionType} 返回一个用于删除的 action
 */
const removeActionAsync = (payload: number): types.IRemoveActionAsyncType => {
    return {
        type: types.TODO_ACTION_TYPE.REMOVE_ASYNC,
        payload: {
            removeAsync: new Promise<number>((resolve: (removeActionAsync: number) => void) => {
                setTimeout(() => {
                    resolve(payload);
                }, 1000);
            }),
        },
    };
};

/**
 * 用于做更新操作的 todo action createor
 * @param {types.ITodo} payload todo 待办事项
 * @returns {types.ITodoActionType} 返回一个用于更新的 action
 */
const updateAction = (payload: types.ITodoType): types.IUpdateActionType => {
    return {
        type: types.TODO_ACTION_TYPE.UPDATE,
        payload: {
            data: payload,
        },
    };
};

export { addAction, removeAction, removeActionAsync, updateAction };
