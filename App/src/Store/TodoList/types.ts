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
export enum ACTION_TYPE {
    ADD = 'ADD',
    REMOVE = 'REMOVE',
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

/**
 * 最抽象的 action
 * @param {any} payload 数据
 */
interface IActionType {
    type: ACTION_TYPE;
    payload: any;
}

/**
 * 用于操作 todo 的 action，继承了 IAction
 * @param {ITodoType} payload todo，待办事项的数据
 */
interface ITodoActionType extends IActionType {
    payload: ITodoType;
}

export type { IActionType, ITodoActionType, ITodoType };
