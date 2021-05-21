import * as constants from './constants';

/**
 * 
 * @param {number} id 唯一Id 
 * @param {string} text 元素文本
 * @param {boolean} editing 是否正在编辑
 */
interface ITodoType {
    id: number;
    text: string;
    editing: boolean;
}

/**
 * 最抽象的 action
 * @param {any} payload 数据
 */
interface IActionType {
    type: constants.ACTION_TYPE;
    payload: any;
}

/**
 * 用于操作 todo 的 action，继承了 IAction
 * @param {ITodoType} payload todo，待办事项的数据
 */
interface ITodoActionType extends IActionType {
    payload: ITodoType;
}

export type {
    IActionType,
    ITodoActionType,
    ITodoType,
};