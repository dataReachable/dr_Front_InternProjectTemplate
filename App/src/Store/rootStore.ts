/**
 * file: root store
 * @date 2022-09-26
 * @author tianci
 * @lastModify tianci 2022-09-26
 */
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';

import rootSaga from './rootSaga';

// create sage middleware
const sagaMiddleware = createSagaMiddleware();

// apply saga middle ware and reducer

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

//import the root saga and run this saga
sagaMiddleware.run(rootSaga);

export default store;
