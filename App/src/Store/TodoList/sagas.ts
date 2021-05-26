/**
 * @file 这是 TodoList Saga 文件
 * @date 2021-05-22
 * @author lidaoping
 * @lastModify lidaoping 2021-05-22
 */
import { put, fork, takeEvery } from 'redux-saga/effects';
import { removeAction } from './actions';
import * as types from './types';

/**
 * 异步操作执行完成后执行同步操作
 * @param {types.ITodoType} todo
 */
function* removeSaga(removeActionAsync: types.IRemoveActionAsyncType) {
    // yield 返回 Promise resolve 后的结果
    const id: number = yield removeActionAsync.payload.removeAsync;
    // 上一次返回的只作为这次的参数输入，执行同步删除 action
    // put 只能放在 yield 关键字后面使用才能触发 reducer，否则放在代码块中不能触发
    yield put(removeAction(id));
}

/**
 * 监听 types.ACTION_TYPE.REMOVE 删除操作类型的 action，其他类型不会执行 removeSaga
 * @param {types.ITodoType} todo
 */
function* watchRemoveSaga() {
    yield takeEvery(types.TODO_ACTION_TYPE.REMOVE_ASYNC, removeSaga);
}

const TodoListSaga = [fork(watchRemoveSaga)];

export default TodoListSaga;
