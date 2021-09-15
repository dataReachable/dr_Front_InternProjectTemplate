import {ADD_TODO,REMOVE_TODO,EDIT_TODO,SELECTED_TODO} from './actionTypes'
import {ITodo, IAction} from './reducer'

interface IRemove {
    type: string
}

export const addTodoAction = (value: ITodo): IAction => ({type: ADD_TODO, data: value})
export const removeTodoAction = (): IRemove => ({type: REMOVE_TODO})
export const editTodoAction = (value: ITodo): IAction => ({type: EDIT_TODO, data: value})
export const selectedTodoAction = (value: ITodo): IAction => ({type: SELECTED_TODO, data: value})