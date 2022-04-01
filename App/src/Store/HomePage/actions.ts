/**
 * @file 文件包含 homePage组件 所有dispatch actions函数
 * @date 2022/03/30 13:35
 * @author 张明舟
 * @lastModify 张明舟 2022/03/31 11:35
 */
import * as types from "./types"

/**
 * 新增元素 action
 * @param item 当前新增的元素
 */
const dispatchCreateElement = (item: types.ListItemType): types.HomePageActionTypes => {
    return {
        type: types.Action_Type.ADD_ELEMENT,
        payload: item
    }
}
/**
 * 异步新增元素 action
 * @param item 当前修改的元素
 */
const dispatchCreateElementAsync = (item: types.ListItemType): types.HomePageActionTypes => {
    return {
        type: types.Action_Type.ADD_ELEMENT_ASYNC,
        payload: item
    }
}
/**
 * 删除元素 action
 * @param item 当前删除的元素
 */
const dispatchDelElement = (item: types.ListItemType): types.HomePageActionTypes => {
    return {
        type: types.Action_Type.DEL_ELEMENT,
        payload: item
    }
}
/**
 * 修改元素 action
 * @param item 当前修改的元素
 */
const dispatchUpdateElement = (item: types.ListItemType): types.HomePageActionTypes => {
    return {
        type: types.Action_Type.UPDATE_ELEMENT,
        payload: item
    }
}

export {
    dispatchCreateElement,
    dispatchCreateElementAsync,
    dispatchDelElement,
    dispatchUpdateElement
}