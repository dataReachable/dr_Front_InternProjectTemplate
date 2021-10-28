/**
 * @file TodoInput Component
 * @date 2021-10-27
 * @author kezezheng
 * @lastModify kezezheng 2021-10-27
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import React, { FC, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../../../Store/Todo/actions';
import { RootState } from '../../../../Store/rootReducer';
import { Todo } from '../../../../Store/Todo/actionTypes';
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const TodoInput: FC = (): JSX.Element => {
    /* <------------------------------------ **** STATE START **** ------------------------------------ */
    /************* This section will include this component HOOK function *************/
    const [inputValue, setInputValue] = useState('');

    const dispatch = useDispatch();

    const { currentTodo } = useSelector((state: RootState) => state.TodoReducer);
    /* <------------------------------------ **** STATE END **** ------------------------------------ */
    /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
    /************* This section will include this component parameter *************/
    /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    /************* This section will include this component general function *************/
    /**
     * 添加一个todo
     */
    const addTodo = () => {
        // 判断输入的内容不为空时 再进行事件处理
        if (!(inputValue?.trim() === '')) {
            const todo: Todo = {
                id: new Date().getTime(),
                text: inputValue,
            };
            dispatch(actions.addTodoAction(todo));
            setInputValue(''); // 添加完todo后清空input输入框
        }
    };
    /**
     * 移除一个todo
     */
    const removeTodo = () => {
        // 存在选中的todo时 再进行移除操作
        if (currentTodo) {
            dispatch(actions.removeTodoAction(currentTodo));
        }
    };
    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    return (
        <>
            <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button onClick={addTodo}>创建</button>
            <button onClick={removeTodo}>删除</button>
        </>
    );
};
export default TodoInput;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */