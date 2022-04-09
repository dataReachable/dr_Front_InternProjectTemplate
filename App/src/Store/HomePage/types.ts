export interface ToDoItem {
  id: number,
  content: string
}

export interface Action {
  type: string,
  payload: ToDoItem & {id: number}
}

export enum ACTION_TYPE {
  ADD_ITEM = 'ADD_ITEM',
  DELETE_ITEM = 'DELETE_ITEM',
  UPDATE_ITEM = 'UPDATE_ITEM',
}