import React, { useState, useEffect, useRef } from 'react';
import { RootState } from '../../../../Store/rootReducer';
import * as actions from '../../../../Store/Todo/actions';
import { useSelector, useDispatch } from 'react-redux';
import { Todo } from '../../../../Store/Todo/actions';

const TodoList = (): JSX.Element => {
    /* <------------------------------------ **** HOOKS START **** ------------------------------------ */
    // 是否显示修改todo的 输入框
    const [isInput, setIsInput] = useState(false);

    // useDispatch
    const dispatch = useDispatch();

    // 获取 redux store 中的 state 数据
    const { todos } = useSelector((state: RootState) => state.TodoReducer);
    const { currentTodo } = useSelector((state: RootState) => state.TodoReducer);

    // ref
    const inputRef = useRef<HTMLInputElement>(null);

    // 自动聚焦 input 输入框
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    });
    /* <------------------------------------ **** HOOKS END **** ------------------------------------ */

    /* <------------------------------------ **** FUNCTION METHODS START **** ------------------------------------ */
    // 选择一个 todo 触发
    const selectTodo = (todo: Todo) => {
        return () => {
            dispatch(actions.selectTodo(todo));
            setIsInput(false);
        };
    };

    // input 输入框 失焦 触发
    const handleBlur = () => {
        if (inputRef.current?.value !== currentTodo?.text) {
            const todo = {
                id: currentTodo?.id as number,
                text: inputRef.current?.value as string,
            };
            dispatch(actions.editTodo(todo));
        }

        setIsInput(false);
    };
    /* <------------------------------------ **** FUNCTION METHODS END **** ------------------------------------ */
    return (
        <ul style={{ width: 200 }}>
            {todos.map((todo) => (
                <li
                    key={todo.id}
                    style={
                        todo.id === currentTodo?.id
                            ? { backgroundColor: 'pink', cursor: 'pointer' }
                            : { cursor: 'pointer' }
                    }
                    onClick={selectTodo(todo)}
                    onDoubleClick={() => setIsInput(true)} // 双击 显示 input 输入框
                >
                    <span>{currentTodo === todo && isInput ? '' : todo.text}</span>
                    {currentTodo === todo && isInput ? (
                        <input
                            type="text"
                            ref={inputRef}
                            defaultValue={todo.text}
                            onBlur={handleBlur}
                        />
                    ) : (
                        ''
                    )}
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
