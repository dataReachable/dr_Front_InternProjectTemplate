/**
 * @date 2022-09-26
 * @author tianci
 * @lastModify tianci 2022-09-26
 */

import * as types from './types';

const initialState: types.todoMainReducer = {
    checkId: '',
    todoList: [
        {
            id: '1',
            name: '元素一',
        },
        {
            id: '2',
            name: '元素二',
        },
        {
            id: '3',
            name: '元素三',
        },
    ],
};

const reducer = (state = initialState, action: types.todoMainActions): types.todoMainReducer => {
    switch (action.type) {
        case types.ACTION_TYPE.ADD_TODO_ACTION:
            return {
                ...state,
                todoList: [
                    ...state.todoList,
                    {
                        id: action.payload.id,
                        name: action.payload.name,
                    },
                ],
            };
        case types.ACTION_TYPE.DEL_TODO_ACTION:
            return {
                ...state,
                todoList: state.todoList.filter((item) => item.id !== action.payload.id),
            };
        case types.ACTION_TYPE.CHANGE_CHECKID:
            return {
                ...state,
                checkId: action.payload.id,
            };
        case types.ACTION_TYPE.EDIT_TODO:
            return {
                ...state,
                todoList: state.todoList.map((item) => {
                    if (item.id === action.payload.id) {
                        return {
                            id: action.payload.id,
                            name: action.payload.name,
                        };
                    } else {
                        return item;
                    }
                }),
            };
        default:
            return state;
    }
};

export default reducer;
