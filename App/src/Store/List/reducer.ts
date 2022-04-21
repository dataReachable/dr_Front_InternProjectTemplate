/**
 * @file reducer
 * @date 2022-04-20
 * @author
 * @lastModify 2022-04-20
 */

import * as types from './types';

const initState: types.ListDataReducer = {
    list: [],
};

export default function (state = initState, action) {
    const { type, payload } = action;
    switch (type) {
        case types.ACTION_TYPE.ADD_ITEM:
            return {
                ...state,
                list: payload,
            };
        case types.ACTION_TYPE.REMOVE_ITEM:
            return {
                ...state,
                list: payload,
            };
        case types.ACTION_TYPE.SELECT_ITEM:
            return {
                ...state,
                list: payload,
            };
        case types.ACTION_TYPE.UPDATE_ITEM:
            return {
                ...state,
                list: payload,
            };
        case types.ACTION_TYPE.UPDATE_INPUTVALUE:
            return {
                ...state,
                list: payload,
            };
        case types.ACTION_TYPE.UPDATE_BLURTEXT:
            return {
                ...state,
                list: payload,
            };
        default:
            return state;
    }
}
