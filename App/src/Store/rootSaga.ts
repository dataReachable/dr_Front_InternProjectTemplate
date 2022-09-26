/**
 * @file root saga file
 * @date 2022-09-26
 * @author tianci
 * @lastModify tianci 2022-09-26
 */
import { all } from 'redux-saga/effects';
import sagas from './todoMain/sagas';

export default function* rootSaga(): Generator {
    try {
        yield all([
            // this is where the saga combine into the rootSaga
            ...sagas,
        ]);
    } catch (err) {
        // This is where error monitoring should go
        console.log('error caught in rootsaga::', err);
    }
}
