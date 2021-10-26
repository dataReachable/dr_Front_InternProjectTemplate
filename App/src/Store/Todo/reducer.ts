import { Action, Todo } from './actions';
import ActionTypes from './actionTypes';

export interface State {
    todos: Todo[]; // todo list 列表
    currentTodo: Todo | null; // 当前选择的todo
}

const initState: State = {
    todos: [
        { id: 1, text: '吃饭' },
        { id: 2, text: '睡觉' },
        { id: 3, text: '打豆豆' },
        { id: 4, text: '写bug' },
    ],
    currentTodo: null,
};

export const TodoReducer = (state = initState, action: Action): State => {
    const { type, payload } = action;
    switch (type) {
        case ActionTypes.ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, payload],
            };
        case ActionTypes.REMOVE_TODO:
            return {
                todos: state.todos.filter((todo) => todo.id !== payload.id),
                currentTodo: null,
            };
        case ActionTypes.SELECT_TODO:
            return {
                ...state,
                currentTodo: payload,
            };
        case ActionTypes.EDIT_TODO: {
            return {
                ...state,
                todos: state.todos.map((todo) => {
                    if (todo.id === payload.id) {
                        return { ...todo, text: payload.text };
                    } else {
                        return todo;
                    }
                }),
            };
        }

        default:
            return state;
    }
};
