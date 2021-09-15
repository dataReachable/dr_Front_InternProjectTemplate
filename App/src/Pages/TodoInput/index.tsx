/**
* @file todoInput page
* @date 2021-09-15
* @author 朱小姣
* @lastModify 朱小姣 2021-09-15
*/
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import React, { useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {addTodoAction} from '../../Store/todoList/actions'
import { RootState } from '../../Store/rootReducer';
import {removeTodoAction} from '../../Store/todoList/actions'


/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */




/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const TodoInput = (): JSX.Element => {
/* <------------------------------------ **** STATE START **** ------------------------------------ */
/************* This section will include this component HOOK function *************/
    const inputRef = useRef<HTMLInputElement>(null)
/* <------------------------------------ **** STATE END **** ------------------------------------ */
    // 获取store中的数据
    const todolist = useSelector((state:RootState)=>state.todoListReducer)
    const dispatch = useDispatch()
/* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
/************* This section will include this component parameter *************/
/* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
/************* This section will include this component general function *************/

    // 添加任务 
    const add = () => {
        // 获取输入框输入的值 --- 除去两边空格
        const val = inputRef.current?.value.trim()
        // 判断是否有输入
        if(val) {
            // 再判断是否存在相同任务
            const isExit = todolist.find(todo => todo.content === val)
            if(isExit) {
                alert('该任务已被添加，请输入不同的任务')
            } else {
                dispatch(addTodoAction({
                    id: new Date().getTime(),
                    content: val
                }))
            }
        }

        // 清空输入框
        inputRef.current!.value = ''
    }

    // 删除任务
    const remove = () => {
        dispatch(removeTodoAction())
    }



/* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    return (
        <div>
            <input type="text" placeholder="请输入任务" ref={inputRef} />
            <button onClick={add}>创建</button>
            <button onClick={remove}>删除</button>
        </div>
    );
};
export default TodoInput
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */