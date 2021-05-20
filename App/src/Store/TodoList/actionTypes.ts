/**
 * 该接口描述了该数据的数据结构
 * @param {number} id 数据的id,当前时间的毫秒数
 * @param {string} content 数据的内容
 * @param {boolean} completed 内容是否完成
 */
interface TodoType {
    id: number;
    content: string;
    completed: boolean;
}
/**
 * 该接口描述actions中数据的数据结构
 * @param {Array<TodoType>} type 提交数据的action类型
 * @param {TodoType | Array<TodoType> | number} payload 需要提交的数据
 */
interface TodoListActionType {
    type: ACTION_TYPES;
    payload: TodoType | Array<TodoType> | number;
}
/**
 * 该文件是TodoList reducer文件
 * @param {Array<TodoType>} todoList todolist的结构
 */
interface TodoListReducer {
    todoList: Array<TodoType>;
}

export type { TodoType, TodoListReducer, TodoListActionType };

export type TodoListActionTypes = TodoType | TodoListReducer | TodoListActionType;

export enum ACTION_TYPES {
    ADD_TODO_ITEM = 'ADD_TODO_ITEM',
    REMOVE_TODO_ITEMS = 'REMOVE_TODO_ITEMS',
    CHANGE_TODO_COMPLETE = 'CHANGE_TODO_COMPLETE',
    CHANGE_TODO_CONTENT = 'CHANGE_TODO_CONTENT',
}
