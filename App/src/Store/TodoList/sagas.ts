/**
 * @file 这是 TodoList Saga 文件
 * @date 2021-05-22
 * @author lidaoping
 * @lastModify lidaoping 2021-05-22
 */
import { TakeableChannel } from '@redux-saga/core';
import { delay, put, fork, take, takeEvery } from 'redux-saga/effects';
import * as types from './types';

/**
 * 延迟 3秒 执行删除操作
 * @param {types.ITodoType} todo
 */
function* removeSaga(todo: types.ITodoType) {
    const res: types.ITodoType = yield new Promise((resolve: (todo: types.ITodoType) => void) => {
        setTimeout(() => {
            resolve(todo);
        }, 1000);
    });
    yield put<types.ITodoActionType>({
        type: types.ACTION_TYPE.REMOVE,
        payload: res,
    });
}

/**
 * 监听 types.ACTION_TYPE.REMOVE 删除操作类型的 action，其他类型不会执行 removeSaga
 * @param {types.ITodoType} todo
 */
function* watchRemoveSaga() {
    console.log('watch remove saga');
    yield takeEvery(types.ACTION_TYPE.REMOVE as unknown as TakeableChannel<unknown>, removeSaga);
}

const TodoListSaga = [fork(watchRemoveSaga)];

export default TodoListSaga;
