import * as types from './actionTypes';
import * as actions from './actions';
import { fork, put, takeEvery } from '@redux-saga/core/effects';

/**
 * 监听到REMOVE_TODO_ITEMS_ASYNC的派发后，执行延迟两秒操作，并删除item
 * @param {TodoListActionType} action 捕获到的action
 */
function* handleRemoveTodoItems(action: types.TodoListActionType) {
    const res: number = yield new Promise((resolve: (val: number) => void) => {
        setTimeout(() => {
            resolve(action.payload as number);
        }, 2000);
    });
    yield put(actions.removeTodoItemsAction(res));
}

/**
 * 监听REMOVE_TODO_ITEMS_ASYNC的派发
 */
function* watchRemoveTodoItems() {
    yield takeEvery(types.ACTION_TYPES.REMOVE_TODO_ITEMS_ASYNC, handleRemoveTodoItems);
}

const todoListSaga = [fork(watchRemoveTodoItems)];

export default todoListSaga;
