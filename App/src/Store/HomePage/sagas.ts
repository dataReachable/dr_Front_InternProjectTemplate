/**
 * @file 文件的描述
 * @date 2022/03/30 11:00
 * @author 张明舟
 * @lastModify 张明舟 2022/03/30 11:00
 */

import { call, fork, put, takeLatest } from "redux-saga/effects"
import * as types from "./types"

/**
 * 延迟传递元素
 * @param {number} ms 延时时间
 * @param {types.ListItemType} payload 传递的元素
 * */
function delay(ms: number, payload: types.ListItemType): Promise<types.ListItemType> {
    return new Promise(resolve => setTimeout(() => resolve(payload), ms))
}

/**
 * 异步新增元素
 * */
function* createElementAsync(action: types.HomePageActionTypes) {
    const data = yield call(delay, 1000, action.payload)
    yield put({
        type: types.Action_Type.ADD_ELEMENT,
        payload: data
    })
}
/**
 * 异步删除元素
 * */
function* delElementAsync(action: types.HomePageActionTypes) {
    const data = yield call(delay, 1000, action.payload)
    yield put({
        type: types.Action_Type.DEL_ELEMENT,
        payload: data
    })
}
/**
 * saga 监听异步新增函数
 * */
function* watchCreateElementAsync() {
    yield takeLatest(types.Action_Type.ADD_ELEMENT_ASYNC, createElementAsync)
}
/**
 * saga 监听异步删除函数
 * */
function* watchDelElementAsync() {
    yield takeLatest(types.Action_Type.DEL_ELEMENT_ASYNC, delElementAsync)
}

const sagas = [fork(watchCreateElementAsync),fork(watchDelElementAsync)]

export default sagas