/**
 * @file todoMain module sagas file
 * @date 2022-09-26
 * @author tianci
 * @lastModify tianci 2022-09-26
 */
import { takeLatest, fork, delay, put } from 'redux-saga/effects';
import * as types from './types';
import * as actions from './actions';

function* handleAddTodo(action: types.AddTodoActionSaga) {
    yield delay(1000); // 等待1秒
    yield put(actions.addTodoAction(action.payload)); // 命令 middleware 向 Store 发起一个 action
}

function* watchAsyncTasks() {
    yield takeLatest(types.ACTION_TYPE.ADD_TODO_ACTION_SAGA, handleAddTodo);
}

const sagas = [fork(watchAsyncTasks)];

export default sagas;
