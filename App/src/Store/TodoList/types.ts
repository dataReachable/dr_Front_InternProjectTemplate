/**
 * @file
 * @date 2021/05/12 15:52
 * @author xiongwen
 * @lastModify xiongwen 2021/--/-- --:--
 */

/**
 * 定义所有的 Action 类型
 * @enum
 * @type {ACTION_TYPE)}
 */
export enum ACTION_TYPE {
    CHANGE_INPUTTEXT = 'CHANGE_INPUTTEXT',
    CREATE_TODOLIST_ITEM = 'CREATE_TODOLIST_ITEM',
    DELETE_TODOLIST_ITEM = 'DELETE_TODOLIST_ITEM',
    SELECTED_NEW_ITEM = 'SELECTED_NEW_ITEM',
    TOGGLE_EDITABLE = 'TOGGLE_EDITABLE',
    CHANGE_ITEM_VALUE = 'CHANGE_ITEM_VALUE',
}


/**
 * 定义一个输入框 onChange 对应的 Action 接口，改变输入框文本
 */
interface InputTextChangeAction {
    type: typeof ACTION_TYPE.CHANGE_INPUTTEXT;
    payload: {
        inputText: string,
    };
}

/**
 * 定义一个按钮 onClick 对应的 Action 接口，添加一个列表项
 */
interface CreateTodoListItemAction {
    type: typeof ACTION_TYPE.CREATE_TODOLIST_ITEM;
}

/**
 * 定义一个按钮 onClick 对应的 Action 接口，删除一个列表项
 */
interface DeleteTodoListItemAction {
    type: typeof ACTION_TYPE.DELETE_TODOLIST_ITEM;
}

/**
 * 定义一个列表项 onFocus 对应的 Action 接口，选择一个列表项
 */
interface SelectedNewItemAction {
    type: typeof ACTION_TYPE.SELECTED_NEW_ITEM;
    payload: {
        selected: number,
    }
}

/**
 * 定义一个列表项 onFocus 对应的 Action 接口，选择一个列表项
 */
interface ToggleEditable {
    type: typeof ACTION_TYPE.TOGGLE_EDITABLE;
}

/**
 * 定义一个列表项 onDoubleClick 对应的 Action 接口，编辑一个列表项
 */
interface ItemValueChange {
    type: typeof ACTION_TYPE.CHANGE_ITEM_VALUE;
    payload: {
        inputText: string,
    }
}

/**
 * 定义一个联合类型，包含所有的 Acton 接口
 * @type
 * @type {ToDoListActionTypes)}
 */
export type ToDoListActionTypes = InputTextChangeAction | CreateTodoListItemAction | DeleteTodoListItemAction | SelectedNewItemAction | ToggleEditable | ItemValueChange;

/**
 * 定义一个 Reducer 接口，描述 state 的结构
 */
export interface TodoListReducer {
    inputText: string;
    selected: number;
    items: string[];
    editable: boolean;
}