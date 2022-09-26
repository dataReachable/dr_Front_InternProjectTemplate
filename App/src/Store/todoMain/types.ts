/**
 * @date 2022-09-26
 * @author tianci
 * @lastModify tianci 2022-09-26
 */

export enum ACTION_TYPE {
    ADD_TODO_ACTION = 'ADD_TODO_ACTION',
    ADD_TODO_ACTION_SAGA = 'ADD_TODO_ACTION_SAGA',

    DEL_TODO_ACTION = 'DEL_TODO_ACTION',
    DEL_TODO_ACTION_SAGA = 'DEL_TODO_ACTION_SAGA',

    CHANGE_CHECKID = 'CHANGE_CHECKID',
    EDIT_TODO = 'EDIT_TODO',
}

interface listType {
    id: string;
    name: string;
}
export interface todoMainReducer {
    checkId: string;
    todoList: listType[];
}
/**
 * payload
 */
export interface AddTodoResponseType {
    id: string;
    name: string;
}

export interface AddTodoType {
    id: string;
    name: string;
}

export interface DelTodoResponseType {
    id: string;
}

export interface DelTodoType {
    id: string;
}
export interface ChangeCheckId {
    id: string;
}
export interface EditTodoType {
    id: string;
    name: string;
}

/**
 * action
 */
export interface AddTodoAction {
    type: ACTION_TYPE.ADD_TODO_ACTION;
    payload: AddTodoResponseType;
}

export interface AddTodoActionSaga {
    type: ACTION_TYPE.ADD_TODO_ACTION_SAGA;
    payload: AddTodoType;
}

export interface DelTodoAction {
    type: ACTION_TYPE.DEL_TODO_ACTION;
    payload: DelTodoResponseType;
}

export interface DelTodoActionSaga {
    type: ACTION_TYPE.DEL_TODO_ACTION_SAGA;
    payload: DelTodoType;
}
export interface ChangeCheckIdAction {
    type: ACTION_TYPE.CHANGE_CHECKID;
    payload: ChangeCheckId;
}
export interface EditTodoAction {
    type: ACTION_TYPE.EDIT_TODO;
    payload: EditTodoType;
}
export type todoMainActions =
    | AddTodoAction
    | AddTodoActionSaga
    | DelTodoAction
    | DelTodoActionSaga
    | ChangeCheckIdAction
    | EditTodoAction;
