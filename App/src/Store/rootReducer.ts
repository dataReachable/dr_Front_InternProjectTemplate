/**
 * @file root reducer
 * @date 2020-09-22
 * @author Frank
 * @lastModify 张明舟 2022-03-30
 */
import { combineReducers } from 'redux';

// import demoReducer from './moduleA/reducer';
import HomePageReducer from './HomePage/reducer';

// combine all the reducer in here
const rootReducer = combineReducers({
    homePageReducer: HomePageReducer
});
// export the root reducer state
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
