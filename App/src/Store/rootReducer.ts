/**
 * @file root reducer
 * @date 2022-09-26
 * @author tianci
 * @lastModify tianci 2022-09-26
 */
import { combineReducers } from 'redux';
import TodoListReducer from './todoMain/reducer';

// combine all the reducer in here
const rootReducer = combineReducers({
    TodoListReducer,
});
// export the root reducer state
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
