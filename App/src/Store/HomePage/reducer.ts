/**
 * @file 文件包含 homePage组件 reducer初始化state和reducer对应action的逻辑处理
 * @date 2022/03/30 13:35
 * @author 张明舟
 * @lastModify 张明舟 2022/03/31 13:50
 */
import * as types from "./types"

const initialState: types.ListType = []

const reducer = (state = initialState, action: types.HomePageActionTypes) => {
    let temp = initialState;
    let index = 0;
    const {payload} = action
    switch(action.type) {
        case types.Action_Type.ADD_ELEMENT:
            return [...state, action.payload];
        case types.Action_Type.DEL_ELEMENT:
            temp = [...state];
            index = temp.findIndex(item => item.id === payload.id)
            index!=-1 && temp.splice(index,1)
            return temp
        case types.Action_Type.UPDATE_ELEMENT:
            temp = [...state];
            index = temp.findIndex(item => item.id === payload.id)
            index!=-1 && temp.splice(index,1,action.payload)
            return temp
        default: return state;
    }
}

export default reducer