/**
 * @file TdItem
 * @date 2021-05-20
 * @author 周成志
 * @lastModify 周成志 2021-05-20
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import React, { FC } from 'react';
import { Row, Col, Radio, Button } from 'antd';
import { useDispatch } from 'react-redux';
import * as types from '../../../Store/TodoList/actionTypes';
import * as actions from '../../../Store/TodoList/actions';
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
interface PropTypes {
    todo: types.TodoType;
}
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const TdItem: FC<PropTypes> = ({ todo }): JSX.Element => {
    /* <------------------------------------ **** STATE START **** ------------------------------------ */
    /************* This section will include this component HOOK function *************/
    const dispatch = useDispatch();
    /* <------------------------------------ **** STATE END **** ------------------------------------ */
    /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
    /************* This section will include this component parameter *************/
    /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    /************* This section will include this component general function *************/
    function changeTodoComplete(id: number) {
        dispatch(actions.changeTodoCompleteAction(id));
    }
    function removeTodoItem(id: number) {
        dispatch(actions.removeTodoItemsAction(id));
    }
    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    return (
        <Row justify="center" onClick={() => changeTodoComplete(todo.id)}>
            <Col span={1}>
                <Radio checked={todo.completed} />
            </Col>
            <Col span={6}>
                <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                    {todo.content}
                </span>
            </Col>
            <Col span={2}>
                <Button type="dashed" onClick={() => removeTodoItem(todo.id)}>
                    delete
                </Button>
            </Col>
        </Row>
    );
};
export default TdItem;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
