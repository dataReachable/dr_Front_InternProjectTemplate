/**
 * @file actions
 * @date 2022-04-20
 * @author
 * @lastModify 2022-04-20
 */

import * as types from './types';

// 添加action
export const addItemAction = (payload: Array<types.AddItemType>) => ({
    type: types.ACTION_TYPE.ADD_ITEM,
    payload,
});
export const addItemActionSaga = (payload: types.AddItemType) => ({
    type: types.ACTION_TYPE.ADD_ITEM_SAGA,
    payload,
});

// 删除action
export const removeItemsAction = (payload: Array<types.AddItemType>) => ({
    type: types.ACTION_TYPE.REMOVE_ITEM,
    payload,
});
export const removeItemsActionSaga = () => ({ type: types.ACTION_TYPE.REMOVE_ITEM_SAGA });

// 选中action
export const selectItemAction = (payload: Array<types.AddItemType>) => ({
    type: types.ACTION_TYPE.SELECT_ITEM,
    payload,
});
export const selectItemActionSaga = (payload: string) => ({
    type: types.ACTION_TYPE.SELECT_ITEM_SAGA,
    payload,
});

// 切换action
export const updateItemAction = (payload: Array<types.AddItemType>) => ({
    type: types.ACTION_TYPE.UPDATE_ITEM,
    payload,
});
export const updateItemActionSaga = (payload: string) => ({
    type: types.ACTION_TYPE.UPDATE_ITEM_SAGA,
    payload,
});

// 更新输入框值action
export const updateItemInputValueAction = (payload: Array<types.AddItemType>) => ({
    type: types.ACTION_TYPE.UPDATE_INPUTVALUE,
    payload,
});
export const updateItemInputValueActionSaga = (payload: types.UpdateInputValueType) => ({
    type: types.ACTION_TYPE.UPDATE_INPUTVALUE_SAGA,
    payload,
});

// blur切换回文本action
export const updateItemInputBlurAction = (payload: Array<types.AddItemType>) => ({
    type: types.ACTION_TYPE.UPDATE_BLURTEXT,
    payload,
});
export const updateItemInputBlurActionSaga = (payload: string) => ({
    type: types.ACTION_TYPE.UPDATE_BLURTEXT_SAGA,
    payload,
});
