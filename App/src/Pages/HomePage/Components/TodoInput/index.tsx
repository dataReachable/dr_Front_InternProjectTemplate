import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../../../Store/Todo/actions';
import { RootState } from '../../../../Store/rootReducer';

const TodoInput = (): JSX.Element => {
    /* <------------------------------------ **** HOOKS START **** ------------------------------------ */
    // 新增todo的 Input 输入框
    const [inputValue, setInputValue] = useState('');

    const dispatch = useDispatch();

    // 获取当前选中的 todo
    const { currentTodo } = useSelector((state: RootState) => state.TodoReducer);
    /* <------------------------------------ **** HOOKS END **** ------------------------------------ */

    /* <------------------------------------ **** FUNCTION METHODS START **** ------------------------------------ */
    // 添加一个 todo
    const addTodo = () => {
        // 判断输入的内容 是否为 空值
        if (!(inputValue?.trim() === '')) {
            const todo: actions.Todo = {
                id: new Date().getTime(),
                text: inputValue,
            };
            dispatch(actions.addTodoAction(todo));
            setInputValue('');
        }
    };

    // 移除一个 todo
    const removeTodo = () => {
        if (currentTodo) {
            dispatch(actions.removeTodo(currentTodo));
        }
    };
    /* <------------------------------------ **** FUNCTION METHODS END **** ------------------------------------ */
    return (
        <>
            <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button onClick={addTodo}>创建</button>
            <button onClick={removeTodo}>删除</button>
        </>
    );
};

export default TodoInput;
