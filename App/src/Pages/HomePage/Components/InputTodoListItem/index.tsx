/**
 * @file
 * @date 2021/05/12 15:52
 * @author xiongwen
 * @lastModify xiongwen 2021/--/-- --:--
 */

import React from 'react';

import { RootState } from "../../../../Store/rootReducer";
import * as actions from "../../../../Store/TodoList/actions";
import { useDispatch, useSelector } from 'react-redux';

import { Input } from 'antd';

/**
 * 定义一个 Button 组件
 * @returns {JSX.Element} - 返回值
 */
const InputTodoListItem = (): JSX.Element => {
    /**
     * 获取状态
     */
    const toDoListState = useSelector(
        (state: RootState) => state.TodoListReducer
    );
    /**
     * 获取 dispatch 方法
     */
    const dispatch = useDispatch();
    return (
        <Input 
            type="text"
            placeholder="Add new todo"
            value={toDoListState.inputText} 
            onChange={(event) => dispatch(actions.inputTextChangeAction(event.target.value))}
            onKeyDown={(event) => {
                if (event.key === 'Enter') {
                    dispatch(actions.createTodoListItemAction());
                }
            }}
        />
    );
}

export default InputTodoListItem;