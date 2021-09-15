import {ADD_TODO,REMOVE_TODO,SELECTED_TODO,EDIT_TODO} from './actionTypes'

// preState 中每一个元素的类型注解
export interface ITodo {
    id: number
    content: string
}
// action 的类型注解
export interface IAction {
    type: string,
    data: ITodo
}

// 选中的todo
let selectedTodo = {}

export default function todoListReducer(preState: ITodo[] = [], action: IAction):ITodo[] {
    const { type, data } = action
    
    // 新todolist
    let newTodolist: ITodo[] = []

    switch (type) {
        case ADD_TODO:
            return [data, ...preState]
        case SELECTED_TODO:
            selectedTodo = data
            return preState
        case REMOVE_TODO:
            // 过滤掉 被选择的 todo
            newTodolist =  preState.filter(todo => todo !== selectedTodo )
            return newTodolist
        case EDIT_TODO:
            // 在 preState 中找到应该修改的哪一项进行修改
            preState.map(todo => {
                if(todo.id === data.id) {
                    todo.content = data.content
                }
            })
            return preState
        default:
            return preState
    }
}