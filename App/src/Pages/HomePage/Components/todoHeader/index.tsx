/**
 * @file
 * @date 2022-09-26
 * @author tianci
 * @lastModify tianci 2022-09-26
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    addTodoAction,
    addTodoActionSaga,
    changeCheckId,
    delTodoAction,
} from '~/Store/todoMain/actions';
import { RootState } from '~/Store/rootReducer';
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const TodoHeader = (): JSX.Element => {
    /* <------------------------------------ **** HOOKS START **** ------------------------------------ */
    /**拿到将要删除的todo的id */
    const { checkId } = useSelector((state: RootState) => state.TodoListReducer);
    const dispatch = useDispatch();

    /************* This section will include this component HOOK function *************/
    /* <------------------------------------ **** HOOKS END **** ------------------------------------ */
    /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
    /************* This section will include this component parameter *************/
    /**初始化input框的值 */
    const [value, setValue] = useState('');
    /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    /************* This section will include this component general function *************/
    /**按回车键添加todos */
    const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.code === 'Enter' || e.code === 'NumpadEnter') {
            if (value.trim() === '') {
                // alert('请输入todo')
                return;
            }
            setValue('');
            const id = String(Date.now());
            dispatch(addTodoActionSaga({ id, name: value }));
        }
    };
    /**按创建按钮，创建todo */
    const handleClickAdd = () => {
        // console.log('添加')
        if (value.trim() === '') {
            // alert('请输入todo')
            return;
        }
        setValue('');
        const id = String(Date.now());
        dispatch(addTodoAction({ id, name: value }));
    };
    /**删除todo */
    const handleClickDel = () => {
        // console.log('异步添加')
        if (!checkId) {
            return alert('请选择要删除的todo');
        }
        if (checkId) {
            // console.log('删除', checkId)
            dispatch(delTodoAction({ id: checkId }));
            dispatch(changeCheckId({ id: '' }));
        }
    };
    /**异步创建todo */
    const handleClickAddAsync = () => {
        // console.log('删除')

        if (value.trim() === '') {
            // alert('请输入todo')
            return;
        }
        setValue('');
        const id = String(Date.now());
        dispatch(addTodoActionSaga({ id, name: value }));
    };
    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    return (
        <div className="header">
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyUp={(e) => handleKeyUp(e)}
            />
            <button onClick={handleClickAdd}>创建</button>
            <button onClick={handleClickDel}>删除</button>
            <button onClick={handleClickAddAsync}>异步创建</button>
        </div>
    );
};
export default TodoHeader;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
