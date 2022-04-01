/**
 * @file 文件包含 homePage组件 所有接口类型 reducers, actions, constants 和所有 actions 的联合类型
 * @date 2022/03/30 13:35
 * @author 张明舟
 * @lastModify 张明舟 2022/03/30 13:35
 */
/**
 * homePage组件 reducer初始化
 */
export type ListType = Array<ListItemType>
/**
 * homePage组件 元素payload数据结构
 * @param {number} id 元素的id,需要时独一无二的
 * @param {string} value 元素的值
 * @param {boolean} edit 元素可编辑状态
 */
export interface ListItemType {
    id: number,
    value: string,
    edit: boolean
}

export enum Action_Type {
    ADD_ELEMENT = 'ADD_ELEMENT',
    DEL_ELEMENT = 'DEL_ELEMENT',
    UPDATE_ELEMENT = 'UPDATE_ELEMENT',
    ADD_ELEMENT_ASYNC = 'ADD_ELEMENT_ASYNC'
}

/**
 * 新增元素action
 */
interface AddAction {
    type: typeof Action_Type.ADD_ELEMENT,
    payload: ListItemType
}
/**
 * 删除元素action
 */
interface DelAction {
    type: typeof Action_Type.DEL_ELEMENT,
    payload: ListItemType
}
/**
 * 更新元素action
 */
interface UpdateAction {
    type: typeof Action_Type.UPDATE_ELEMENT,
    payload: ListItemType
}
/**
 * 异步新增元素action
 */
interface AddAsyncAction {
    type: typeof Action_Type.ADD_ELEMENT_ASYNC,
    payload: ListItemType
}

export type HomePageActionTypes = AddAction | DelAction | UpdateAction | AddAsyncAction