/**
* @file todoItem page
* @date 2021-09-15
* @author 朱小姣
* @lastModify 朱小姣 2021-09-15
*/
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {RootState} from '../../Store/rootReducer'
import {selectedTodoAction,editTodoAction} from '../../Store/todoList/actions'
import './index.scss'
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const TodoItem = (): JSX.Element => {
/* <------------------------------------ **** STATE START **** ------------------------------------ */
/************* This section will include this component HOOK function *************/
    
    //保存仅自己使用的状态
    const [selected, setSelected] = useState(null)  // 被选中的任务
    const [edit, setEdit] = useState(null)  // 被双击修改的任务
    const [inputMessage, setInputMessage] = useState('')  // 输入框输入的值

    // 获取store中共享的状态
    const todolist = useSelector((state:RootState)=>state.todoListReducer)
    const dispatch = useDispatch()

/* <------------------------------------ **** STATE END **** ------------------------------------ */
/* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
/************* This section will include this component parameter *************/
/* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
/************* This section will include this component general function *************/

    // 点击 li 更改样式 并传入点击的 li
    const saveTodoId = (todo) => {
        // 保存被选则的li  用于控制类名的添加
        setSelected(todo)

        // 将选中的 li 给 store 保存
        dispatch(selectedTodoAction(todo))
    }

    // 双击 li 展示出编辑框
    const editShow = (todo) => {
        const {content} = todo
        setEdit(todo)
        setInputMessage(content)
    }

    // 输入框发生变化时，更新状态
    const handleChange = (e) => {
        const {target: {value}} = e
        setInputMessage(value)
    }

    // 输入框失去焦点 修改该项 todo 的 content
    const handleBlur = ({id}) => {
        // 首先 关闭编辑框
        setEdit(null)
        // 再判断 是否有输入
        if(inputMessage) {
            // 有输入， 失去焦点就修改值
            dispatch(editTodoAction({id, content: inputMessage}))
        }
    }

/* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    return (
        <div>
            <ul>
                {
                    todolist.map((todo, index) => {
                        return (
                            <li
                                key={todo.id}
                                className={selected === todo ? 'active': ''}
                                onClick={()=>{saveTodoId(todo)}}
                                onDoubleClick={()=>{editShow(todo)}}
                            >
                                <span>{index + 1}、{todo.content}</span>
                                {
                                    edit === todo ? 
                                    <input
                                        type="text"
                                        onChange={handleChange}
                                        onBlur={()=>{handleBlur(todo)}}
                                        autoFocus
                                        value={inputMessage ? inputMessage : ''}
                                    /> : ''
                                }
                                
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
};
export default TodoItem;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */