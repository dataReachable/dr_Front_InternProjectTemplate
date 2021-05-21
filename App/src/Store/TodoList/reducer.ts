import * as types from './actionTypes';

const initialState: types.TodoListReducer = {
    todoList: [],
};

export default (state = initialState, action: types.TodoListActionType): types.TodoListReducer => {
    let obj: types.TodoType;
    switch (action.type) {
        case types.ACTION_TYPES.ADD_TODO_ITEM:
            return {
                ...state,
                todoList: [...state.todoList, action.payload as types.TodoType],
            };
        case types.ACTION_TYPES.REMOVE_TODO_ITEMS:
            return {
                ...state,
                todoList: state.todoList.filter((todo) => todo.id !== action.payload),
            };
        case types.ACTION_TYPES.CHANGE_TODO_COMPLETE:
            return {
                ...state,
                todoList: state.todoList.map((todo) =>
                    todo.id === action.payload
                        ? {
                              ...todo,
                              completed: !todo.completed,
                          }
                        : todo,
                ),
            };
        case types.ACTION_TYPES.CHANGE_TODO_CONTENT:
            obj = action.payload as types.TodoType;
            return {
                ...state,
                todoList: state.todoList.map((todo) => (todo.id === obj.id ? obj : todo)),
            };
        default:
            return state;
    }
};
