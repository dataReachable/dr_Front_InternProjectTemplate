import {Action, ACTION_TYPE, ToDoItem } from "./types"

const addItemAction = (ToDoItem: ToDoItem):Action => {
  return {
    type: ACTION_TYPE.ADD_ITEM,
    payload: ToDoItem
  }
}

const deleteItemAction = (id: number) => {
  return {
    type: ACTION_TYPE.DELETE_ITEM,
    payload: {id}
  }
}

const updateItemAction = (TodoItem: ToDoItem) => {
  return {
    type: ACTION_TYPE.UPDATE_ITEM,
    payload: TodoItem
  }
}

export {addItemAction, deleteItemAction, updateItemAction}