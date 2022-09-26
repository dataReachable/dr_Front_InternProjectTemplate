/**
 * @file
 * @date 2022-09-26
 * @author tianci
 * @lastModify tianci 2022-09-26
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '~/Store/rootReducer';
import { changeCheckId, editTodo } from '~/Store/todoMain/actions';
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const TodoMain = (): JSX.Element => {
    /* <------------------------------------ **** HOOKS START **** ------------------------------------ */
    /************* This section will include this component HOOK function *************/
    const { todoList } = useSelector((state: RootState) => state.TodoListReducer);
    const dispatch = useDispatch();

    /* <------------------------------------ **** HOOKS END **** ------------------------------------ */
    /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
    /************* This section will include this component parameter *************/
    //记录被双击的input框的id
    const [currentId, setCurrentId] = useState('');
    const iptRef = useRef<HTMLInputElement>(null);

    /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    /************* This section will include this component general function *************/
    //删除功能
    const checkList = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (e.currentTarget.className === 'main-list') {
            dispatch(changeCheckId({ id: e.currentTarget.id }));
        }
    };
    //双击显示弹框fn
    const changeCurrentId = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setCurrentId(e.currentTarget.id);
        dispatch(changeCheckId({ id: '' }));
    };
    //input框onblur fn
    const iptOnBlur = () => {
        setCurrentId('');
    };
    //修改input框fn
    const editTodoName = (e: React.KeyboardEvent<HTMLInputElement>, id: string, name: string) => {
        // console.log(e.code)
        // console.log(e.currentTarget.value)
        if (e.code === 'Enter' || e.code === 'NumpadEnter') {
            if (e.currentTarget.value.trim() === '') {
                return alert('任务名不能为空');
            }
            const payload = {
                id: id,
                name: e.currentTarget.value,
            };
            dispatch(editTodo(payload));
            setCurrentId('');
        }
        if (e.code === 'Escape') {
            e.currentTarget.value = name;
            setCurrentId('');
        }
    };
    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    return (
        <>
            {todoList.map((item) => {
                return (
                    <div
                        className="main-list"
                        key={item.id}
                        onClick={(e) => checkList(e)}
                        id={item.id}
                        onDoubleClick={(e) => changeCurrentId(e)}
                    >
                        {currentId === item.id ? (
                            <div className="main-input">
                                <input
                                    type="text"
                                    autoFocus
                                    defaultValue={item.name}
                                    ref={iptRef}
                                    onBlur={iptOnBlur}
                                    onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) =>
                                        editTodoName(e, item.id, item.name)
                                    }
                                />
                            </div>
                        ) : (
                            <div className="main-item ">{item.name}</div>
                        )}
                    </div>
                );
            })}
        </>
    );
};
export default TodoMain;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
