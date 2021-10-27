/**
 * @file TodoList Component
 * @date 2021-10-27
 * @author kezezheng
 * @lastModify kezezheng 2021-10-27
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import React, { FC, useState, useEffect, useRef } from 'react';
import { RootState } from '../../../../Store/rootReducer';
import * as actions from '../../../../Store/Todo/actions';
import { useSelector, useDispatch } from 'react-redux';
import { Todo } from '../../../../Store/Todo/actionTypes';
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const TodoList: FC = (): JSX.Element => {
    /* <------------------------------------ **** STATE START **** ------------------------------------ */
    /************* This section will include this component HOOK function *************/
    // 控制是否显示input编辑框
    const [isInput, setIsInput] = useState(false);

    const dispatch = useDispatch();

    const { todos } = useSelector((state: RootState) => state.TodoReducer);
    const { currentTodo } = useSelector((state: RootState) => state.TodoReducer);

    const inputRef = useRef<HTMLInputElement>(null);

    // 存在input编辑框时自动聚焦
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    });
    /* <------------------------------------ **** STATE END **** ------------------------------------ */
    /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
    /************* This section will include this component parameter *************/
    /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    /************* This section will include this component general function *************/
    /**
     * 选中点击的todo
     * @param todo 点击选择的todo
     * @returns 派发selectTodoAction
     */
    const selectTodo = (todo: Todo) => {
        return () => {
            dispatch(actions.selectTodoAction(todo));
            setIsInput(false);
        };
    };
    /**
     * 输入框失焦后 派发editTodoAction
     */
    const handleBlur = () => {
        if (inputRef.current?.value !== currentTodo?.text) {
            const todo = {
                id: currentTodo?.id as number,
                text: inputRef.current?.value as string,
            };
            dispatch(actions.editTodoAction(todo));
        }
        setIsInput(false);
    };
    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
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
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
