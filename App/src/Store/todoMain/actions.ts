/**
 * @date 2022-09-26
 * @author tianci
 * @lastModify tianci 2022-09-26
 */
import * as types from './types';

//添加todo
export const addTodoAction = (payload: types.AddTodoResponseType): types.AddTodoAction => ({
    type: types.ACTION_TYPE.ADD_TODO_ACTION,
    payload,
});
//异步添加todo
export const addTodoActionSaga = (payload: types.AddTodoType): types.AddTodoActionSaga => ({
    type: types.ACTION_TYPE.ADD_TODO_ACTION_SAGA,
    payload,
});
//删除todo
export const delTodoAction = (payload: types.DelTodoResponseType): types.DelTodoAction => ({
    type: types.ACTION_TYPE.DEL_TODO_ACTION,
    payload,
});

//保存被点击的todo的id，用于删除todo
export const changeCheckId = (payload: types.ChangeCheckId): types.ChangeCheckIdAction => ({
    type: types.ACTION_TYPE.CHANGE_CHECKID,
    payload,
});
//修改todoName
export const editTodo = (payload: types.EditTodoType): types.EditTodoAction => ({
    type: types.ACTION_TYPE.EDIT_TODO,
    payload,
});
