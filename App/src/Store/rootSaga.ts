/**
 * @file root saga file
 * @date 2020-09-22
 * @author Frank
 * @lastModify 张明舟 2022-03-30
 */
import { all } from 'redux-saga/effects';
import homePageSagas from './HomePage/sagas'

export default function* rootSaga(): Generator {
    try {
        yield all([
            // this is where the saga combine into the rootSaga
            ...homePageSagas,
        ]);
    } catch (err) {
        // This is where error monitoring should go
        console.log('error caught in rootsaga::', err);
    }
}
