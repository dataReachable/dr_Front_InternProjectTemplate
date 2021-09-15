/**
* @file todo page
* @date 2021-09-15
* @author 朱小姣
* @lastModify 朱小姣 2021-09-15
*/
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import React from 'react';
import TodoInput from '../TodoInput'
import TodoList from '../TodoList'
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */

/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const Todo = (): JSX.Element => {
/* <------------------------------------ **** STATE START **** ------------------------------------ */
/************* This section will include this component HOOK function *************/
/* <------------------------------------ **** STATE END **** ------------------------------------ */
/* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
/************* This section will include this component parameter *************/
/* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
/************* This section will include this component general function *************/
/* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    return (
        <div>
            <TodoInput/>
            <TodoList/>
        </div>
        
    );
};
export default Todo;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */