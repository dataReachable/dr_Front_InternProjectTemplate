
/**
 * @file sagas.ts
 * @date 2021-10-28
 * @author kezezheng
 * @lastModify kezezheng 2021-10-28
 */
 import * as actions from './actions';

 import { delay, put, takeEvery, fork } from 'redux-saga/effects';
 import { ActionTypes, Action } from './actionTypes';

/**
 * 延迟1s 执行 addTodoAction
 */
 function* addTodoAsync({ payload: todo }: Action): Generator {
    yield delay(1000);
    yield put(actions.addTodoAction(todo));
}

/**
 * 监听 ADD_TODO_ASYNC action 的派发
 */
export function* watchAddTodoAsync(): Generator {
    yield takeEvery(ActionTypes.ADD_TODO_ASYNC, addTodoAsync);
}

/**
 * 延迟1s 执行 removeTodoAction
 */
function* removeTodoAsync({ payload: todo }: Action): Generator {
    yield delay(1000);
    yield put(actions.removeTodoAction(todo));
}

/**
 * 监听 REMOVE_TODO_ASYNC action 的派发
 */
export function* watchRemoveTodoAsync(): Generator {
    yield takeEvery(ActionTypes.REMOVE_TODO_ASYNC, removeTodoAsync);
}

/**
 *  以非阻塞形式 执行 任务
 */
const TodoSagas = [fork(watchAddTodoAsync), fork(watchRemoveTodoAsync)];

export default TodoSagas;