import { Action, ToDoItem } from "./types";

export default function (state:ToDoItem[] = [], action:Action):ToDoItem[] {
  const temp = [...state];
  switch(action.type) {
    case 'ADD_ITEM':
      return [...temp, action.payload];
    case 'DELETE_ITEM':
      return temp.filter(item => {
        if(item.id == action.payload.id) {
          return false;
        }
        return true;
      });
    case 'UPDATE_ITEM':
      return temp.map(item => {
        if(item.id == action.payload.id) {
          return {...action.payload};
        }
        return item;
      });
      default: 
        return state;
  }
}