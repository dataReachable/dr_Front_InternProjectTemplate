/**
 * @file root saga file
 * @date 2020-09-22
 * @author Frank
 * @lastModify Frank 2020-09-22
 */
import { all } from 'redux-saga/effects';
import TodoListSaga from './TodoList/sagas';

export default function* rootSaga(): Generator {
    try {
        yield all([
            ...TodoListSaga,
            // TodoListSaga.watchRemoveSaga({
            //     id: 1,
            //     text: '',
            // }),
            // this is where the saga combine into the rootSaga
        ]);
    } catch (err) {
        // This is where error monitoring should go
        console.log('error caught in rootsaga::', err);
    }
}
