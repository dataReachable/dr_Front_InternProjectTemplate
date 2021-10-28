/**
 * @file action types
 * @date 2021-10-27
 * @author kezezheng
 * @lastModify kezezheng 2021-10-27
 */

 export enum ActionTypes {
    ADD_TODO = 'ADD_TODO',
    REMOVE_TODO = 'REMOVE_TODO',
    SELECT_TODO = 'SELECT_TODO',
    EDIT_TODO = 'EDIT_TODO',
}

/**
 * action的接口类型
 * @param type action的类型
 * @param payload action携带的内容
 */
export interface Action {
    type: string;
    payload: Todo;
}

/**
 * todo的接口类型
 * @param id todo的id
 * @param text todo的内容
 */
export interface Todo {
    id: number;
    text: string;
}

/**
 * reducer返回的state接口类型
 * @param todos  todoList列表数据
 * @param currentTodo 当前选中的todo
 */
export interface State {
    todos: Todo[];
    currentTodo: Todo | null;
}