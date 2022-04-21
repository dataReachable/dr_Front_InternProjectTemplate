/**
 * @file types
 * @date 2022-04-20
 * @author
 * @lastModify 2022-04-20
 */

export enum ACTION_TYPE {
    // 添加
    ADD_ITEM = 'ADD_ITEM',
    ADD_ITEM_SAGA = 'ADD_ITEM_SAGA',
    // 删除
    REMOVE_ITEM = 'REMOVE_ITEM',
    REMOVE_ITEM_SAGA = 'REMOVE_ITEM_SAGA',
    // 选中
    SELECT_ITEM = 'SELECT_ITEM',
    SELECT_ITEM_SAGA = 'SELECT_ITEM_SAGA',
    // 文本输入框切换
    UPDATE_ITEM = 'UPDATE_ITEM',
    UPDATE_ITEM_SAGA = 'UPDATE_ITEM_SAGA',
    // 输入框文本更新
    UPDATE_INPUTVALUE = 'UPDATE_INPUTVALUE',
    UPDATE_INPUTVALUE_SAGA = 'UPDATE_INPUTVALUE_SAGA',
    // blur切换回文本
    UPDATE_BLURTEXT = 'UPDATE_BLURTEXT',
    UPDATE_BLURTEXT_SAGA = 'UPDATE_BLURTEXT_SAGA',
}

/**
 * 列表每一项数据
 * @param {string} id 数据的id,需要时独一无二的
 * @param {string} value 数据的内容
 * @param {boolean} isInput 是否显示为输入框
 * @param {boolean} isChecked 是否选中
 */
export interface AddItemType {
    id: string;
    value: string;
    isInput: boolean;
    isChecked: boolean;
}

/**
 * 更新文本数据类型
 * @param {string} id 数据的id,需要时独一无二的
 * @param {string} value 数据的内容
 */
export interface UpdateInputValueType {
    id: string;
    value: string;
}

/**
 * 添加action接口
 * @param {ACTION_TYPE.ADD_ITEM} type
 * @param {AddItemType} payload
 */
export interface AddItemAtion {
    type: typeof ACTION_TYPE.ADD_ITEM;
    payload: AddItemType;
}

/**
 * 删除action接口
 * @param {ACTION_TYPE.REMOVE_ITEM} type
 * @param {Array<AddItemType>;} payload
 */
export interface RemoveItemAtion {
    type: typeof ACTION_TYPE.REMOVE_ITEM;
    payload: Array<AddItemType>;
}

/**
 * 选中action接口
 * @param {ACTION_TYPE.ADD_ITEM} type
 * @param {AddItemType} payload
 */
export interface SelectItemAtion {
    type: typeof ACTION_TYPE.SELECT_ITEM;
    payload: string;
}

/**
 * 输入框切换action接口
 * @param {} type
 * @param {} payload
 */
export interface UpdateItemAction {
    type: typeof ACTION_TYPE.UPDATE_ITEM;
    payload: string;
}

/**
 * 更新输入框值action接口
 * @param {} type
 * @param {} payload
 */
export interface UpdateItemInputValueAction {
    type: typeof ACTION_TYPE.UPDATE_INPUTVALUE;
    payload: UpdateInputValueType;
}

/**
 * blur切换文本action接口
 * @param {} type
 * @param {} payload
 */
export interface UpdateBlurTextAction {
    type: typeof ACTION_TYPE.UPDATE_BLURTEXT;
    payload: string;
}

/**
 * reducer数据类型
 * @param {ACTION_TYPE.ADD_ITEM} type
 * @param {AddItemType} payload
 */
export interface ListDataReducer {
    list: Array<AddItemType>;
}
