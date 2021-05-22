/**
 * @file 用于存放 TodoList 类型
 * @date 2021-05-21
 * @author lidaoping
 * @lastModify lidaoping 2021-05-21
 */

/**
 * 用于判断对 todo 执行操作的类型
 * @param {string} ADD 增加操作
 * @param {string} REMOVE 删除操作
 * @param {string} UPDATE 更新操作
 */
enum ACTION_TYPE {
    ADD = 'ADD',
    REMOVE = 'REMOVE',
    REMOVE_ASYNC = 'UPDATE',
    UPDATE = 'UPDATE',
}

/**
 *
 * @param {number} id 唯一Id
 * @param {string} text 元素文本
 * @param {boolean} editing 是否正在编辑
 */
interface ITodoType {
    id: number;
    text: string;
}

interface IAddActionType {
    type: ACTION_TYPE.ADD;
    payload: {
        data: ITodoType;
    };
}

interface IRemoveActionType {
    type: ACTION_TYPE.REMOVE;
    payload: {
        id: number;
    };
}

interface IRemoveActionAsyncType {
    type: ACTION_TYPE.REMOVE_ASYNC;
    payload: {
        id: number;
    };
}

interface IUpdateActionType {
    type: ACTION_TYPE.UPDATE;
    payload: {
        data: ITodoType;
    };
}

type IActionType = IAddActionType | IRemoveActionType | IRemoveActionAsyncType | IUpdateActionType;

export { ACTION_TYPE as TODO_ACTION_TYPE };

export type {
    ITodoType,
    IActionType,
    IAddActionType,
    IRemoveActionType,
    IRemoveActionAsyncType,
    IUpdateActionType,
};
