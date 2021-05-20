/**
 * @file TdList Component
 * @date 2021-05-20
 * @author 周成志
 * @lastModify 周成志 2021-05-20
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import React, { Fragment } from 'react';
import Item from './Item';
import { shallowEqual, useSelector } from 'react-redux';
import * as types from '../../../Store/TodoList/actionTypes';
import { RootState } from '../../../Store/rootReducer';
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const TdList = (): JSX.Element => {
    /* <------------------------------------ **** STATE START **** ------------------------------------ */
    /************* This section will include this component HOOK function *************/
    const { todoList } = useSelector((state: RootState) => {
        const todoListReducer: types.TodoListReducer = state['todoListReducer'];
        return {
            todoList: todoListReducer.todoList,
        };
    }, shallowEqual);
    /* <------------------------------------ **** STATE END **** ------------------------------------ */
    /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
    /************* This section will include this component parameter *************/
    /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    /************* This section will include this component general function *************/
    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    return (
        <Fragment>
            {todoList && todoList.map((todo: types.TodoType) => <Item key={todo.id} todo={todo} />)}
        </Fragment>
    );
};
export default TdList;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
