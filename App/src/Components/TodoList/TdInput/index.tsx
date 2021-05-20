/**
 * @file TdInput Component
 * @date 2021-05-20
 * @author 周成志
 * @lastModify 周成志 2021-05-20
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import React, { useRef } from 'react';
import { Row, Col, Input, Button, notification } from 'antd';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import * as types from '../../../Store/TodoList/actionTypes';
import * as actions from '../../../Store/TodoList/actions';
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const TdInput = (): JSX.Element => {
    /* <------------------------------------ **** STATE START **** ------------------------------------ */
    /************* This section will include this component HOOK function *************/
    /* <------------------------------------ **** STATE END **** ------------------------------------ */
    const inputRef = useRef<Input>(null);
    const dispatch = useDispatch();
    const { todoList } = useSelector((store) => {
        const todoListReducer: types.TodoListReducer = store['todoListReducer'];
        return {
            todoList: todoListReducer.todoList,
        };
    }, shallowEqual);
    /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
    /************* This section will include this component parameter *************/
    /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    /************* This section will include this component general function *************/
    const addTodoItem = (): void => {
        let val: string = inputRef.current?.state.value;
        val = val.trim();
        if (val.length) {
            if (!todoList.find((todo) => todo.content === val)) {
                dispatch(
                    actions.addTodoItemAction({
                        id: new Date().getTime(),
                        content: val,
                        completed: false,
                    }),
                );
                inputRef.current!.setValue('');
            } else {
                notification['error']({
                    message: '代办项已存在',
                    description: `"${val}"待办项已存在，请重新输入！`,
                });
            }
        }
    };
    const removeTodoItems = (): void => {
        todoList.forEach((todo) => {
            if (todo.completed) {
                dispatch(actions.removeTodoItemsAction(todo.id));
            }
        });
    };
    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    return (
        <Row justify="center" align="middle">
            <Col span={6}>
                <Input ref={inputRef} placeholder="请输入代办事项..." />
            </Col>
            <Col span={2}>
                <Button onClick={addTodoItem}>添加</Button>
            </Col>
            <Col span={2} onClick={() => removeTodoItems()}>
                <Button type="danger">删除</Button>
            </Col>
        </Row>
    );
};
export default TdInput;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
