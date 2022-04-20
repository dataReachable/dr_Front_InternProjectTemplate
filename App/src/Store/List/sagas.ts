/**
 * @file sagas
 * @date 2022-04-20
 * @author
 * @lastModify 2022-04-20
 */

import * as types from './types';
import * as actions from './actions';
import { takeLatest, fork, put, select } from 'redux-saga/effects';
import { RootState } from '../rootReducer';
import { AddItemType } from './types';

/**
 * 添加一项
 * @param {action} parameter the meaning of this parameter
 * */
function* handleAddItem(action: types.AddItemAtion) {
    const { payload } = action;
    const list: Array<AddItemType> = yield select(
        (state: RootState) => state.listReducers.list as Array<AddItemType>,
    );
    list.push(payload);
    yield put(actions.addItemAction(list));
}

/**
 * 删除选中项
 * @param {type} parameter the meaning of this parameter
 * */
function* handleRemoveItem() {
    const list: Array<AddItemType> = yield select(
        (state: RootState) => state.listReducers.list as Array<AddItemType>,
    );
    if (list.every((item) => item.isChecked === false)) return;
    const newList = list.filter((item) => item.isChecked === false);
    yield put(actions.removeItemsAction(newList));
}

/**
 * 单击选中
 * @param {type} parameter the meaning of this parameter
 * */
function* handleSelectItem(action: types.SelectItemAtion) {
    const { payload } = action;
    const list: Array<AddItemType> = yield select(
        (state: RootState) => state.listReducers.list as Array<AddItemType>,
    );
    if (list[list.findIndex((item) => item.id === payload)].isInput) return;
    const newList = list.map((item) => {
        if (item.id === payload) {
            item.isChecked = !item.isChecked;
        }
        return item;
    });
    yield put(actions.selectItemAction(newList));
}

/**
 * 双击文本输入框切换
 * @param {type} parameter the meaning of this parameter
 * */
function* handleUpdateItem(action: types.UpdateItemAction) {
    const { payload } = action;
    const list: Array<AddItemType> = yield select(
        (state: RootState) => state.listReducers.list as Array<AddItemType>,
    );
    const newList = list.map((item) => {
        if (item.id === payload) {
            item.isInput = !item.isInput;
        }
        return item;
    });
    yield put(actions.updateItemAction(newList));
}

/**
 * 切换后的输入框文本更新
 * @param {type} parameter the meaning of this parameter
 * */
function* handleUpdateItemInputValue(action: types.UpdateItemInputValueAction) {
    const {
        payload: { id, value },
    } = action;
    const list: Array<AddItemType> = yield select(
        (state: RootState) => state.listReducers.list as Array<AddItemType>,
    );
    list[list.findIndex((item) => item.id === id)].value = value;
    yield put(actions.updateItemInputValueAction(list));
}

/**
 * blur后切换回文本
 * @param {type} parameter the meaning of this parameter
 * */
function* handleUpdateBlurText(action: types.UpdateBlurTextAction) {
    yield console.log(action);
    const { payload } = action;
    const list: Array<AddItemType> = yield select(
        (state: RootState) => state.listReducers.list as Array<AddItemType>,
    );
    list[list.findIndex((item) => item.id === payload)].isInput = false;
    yield put(actions.updateItemInputBlurAction(list));
}

/**
 * This is an introduction of the saga watching generation function.
 * */
function* watchOperationItem() {
    yield takeLatest(types.ACTION_TYPE.ADD_ITEM_SAGA, handleAddItem);
    yield takeLatest(types.ACTION_TYPE.REMOVE_ITEM_SAGA, handleRemoveItem);
    yield takeLatest(types.ACTION_TYPE.SELECT_ITEM_SAGA, handleSelectItem);
    yield takeLatest(types.ACTION_TYPE.UPDATE_ITEM_SAGA, handleUpdateItem);
    yield takeLatest(types.ACTION_TYPE.UPDATE_INPUTVALUE_SAGA, handleUpdateItemInputValue);
    yield takeLatest(types.ACTION_TYPE.UPDATE_BLURTEXT_SAGA, handleUpdateBlurText);
}

const OperationItemSagas = [fork(watchOperationItem)];

export default OperationItemSagas;
